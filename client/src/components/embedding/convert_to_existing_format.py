import pandas as pd
import pickle
import json
with open("/Users/datta.deepayan/Downloads/integration/vectorverse/client/src/components/embedding/sentbert_50.pkl","rb") as f:
    consolidated_df = pickle.load(f)

def load_graph(_g_path):
    with open(_g_path, 'r') as f:
        graph = json.load(f)
    return graph
#{int(k): v for k, v in meta.items()}

cluster_summary = pd.read_csv("/Users/datta.deepayan/Downloads/integration/vectorverse/client/src/components/embedding/cluster_sentbert50_summary.csv",dtype = str)

consolidated_df = consolidated_df.merge(cluster_summary,left_on = "attributes.community",right_on = 'Cluster_Num',how = "inner")
# print(consolidated_df.columns)
# consolidated_df.columns = [col.replace("attributes.","") for col in consolidated_df.columns]
# consolidated_df[["x","y","community","color","relations","Summary"]].to_json("/Users/datta.deepayan/Downloads/integration/vectorverse/client/src/components/embedding/dataframe.json", orient="records")


nodes = []
edges = []
sent_mod_name = 'sentbert'
nn = 50
graph = load_graph(f"data/nytfb/graphs/{sent_mod_name}_{nn}_fa.json")
graph_df = pd.json_normalize(graph["edges"]).astype(str)
graph_df.columns = [col.replace("id","key") for col in graph_df.columns]
print(graph_df.columns)

exclusion_list = []

for index, row in consolidated_df.iterrows():
    
    if row["relations"] != "['Missing']":
        if (row['id'] == '318182' ) :
            print("FOUND")
        nodes.append({
            "key": row['id'],
            "attributes": {
                "key": row['id'],
                "label": row['relations'],
                "cluster": row['Cluster_Num'],
                "x": float(row['x']),
                "y": float(row['y']),
                "color": row['color'],
                "clusterLabel": row['Summary'],
                "size": row['size']
            }
    })
    else:
        exclusion_list.append(row['id'])

for index, row in graph_df.iterrows():
    if row['source'] in exclusion_list or row['target'] in exclusion_list:
        continue
    else:
        edges.append({
            "key": row['key'],
            "source": str(row['source']),
            "target": str(row['target']),
            "attributes": {
                "size": 1
            }
        })

result = {"nodes": nodes, "edges": edges}


with open('/Users/datta.deepayan/Downloads/integration/vectorverse/client/public/data/sentbert50_converted_wo_missing.json', 'w') as f:
    json.dump(result, f, indent=4) 
