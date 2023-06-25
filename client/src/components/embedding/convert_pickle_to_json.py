import pandas as pd
import pickle

#Make changes according to your directories
with open("/Users/datta.deepayan/Downloads/integration/vectorverse/client/src/components/embedding/sentbert_50.pkl","rb") as f:
    consolidated_df = pickle.load(f)

cluster_summary = pd.read_csv("/Users/datta.deepayan/Downloads/integration/vectorverse/client/src/components/embedding/cluster_sentbert50_summary.csv",dtype = str)
print(cluster_summary.columns)
cluster_summary = cluster_summary[['Cluster_Num', 'Summary']]
cluster_summary.to_json('/Users/datta.deepayan/Downloads/integration/vectorverse/client/public/data/summary.json', orient='records')

consolidated_df = consolidated_df.merge(cluster_summary,left_on = "attributes.community",right_on = 'Cluster_Num',how = "inner")
print(consolidated_df.columns)
consolidated_df.columns = [col.replace("attributes.","") for col in consolidated_df.columns]
#Removing entries with the Missing Tag
consolidated_df = consolidated_df[consolidated_df["relations"] != "['Missing']"]
consolidated_df[["x","y","community","color","relations","Summary"]].to_json("/Users/datta.deepayan/Downloads/integration/vectorverse/client/src/components/embedding/dataframe.json", orient="records")