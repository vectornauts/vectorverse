import json
import pandas as pd
import argparse
import torch
import pickle

def load_metadata(_md_path):
    with open(_md_path, 'r') as f:
        meta = json.load(f)
    return meta #{int(k): v for k, v in meta.items()}

def load_graph(_g_path):
    with open(_g_path, 'r') as f:
        graph = json.load(f)
    return graph

def load_local_space(_mn):
    _emb = torch.load('../../data/nytfb/embeddings/nytfb_{}_space.pt'.
                      format(_mn))
    ids = [str(j) for j in range(0, _emb.shape[0])]
    vectors = _emb.tolist()

    return pd.DataFrame({'id' : ids, 'embeddings' : vectors})

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    sent_mod_name = 'sentbert'
    nn = 50
    
    md_path = '../../data/nytfb/nytfb_metadata.json' 

    graph = load_graph(f"../../data/nytfb/graphs/{sent_mod_name}_{nn}_fa.json")
    # graph_df = pd.json_normalize(graph["nodes"]).astype(str)

    meta = load_metadata(md_path)
    meta_df = pd.DataFrame.from_dict(meta,orient = 'index').astype(str).reset_index().rename(columns={"index": "vector_index"})
    graph_df = pd.json_normalize(graph["nodes"]).astype(str)
    embedding_df = load_local_space(sent_mod_name)
    consolidated_df = graph_df.merge(meta_df,left_on = "id",right_on='vector_index',how="inner").merge(embedding_df,on = 'id',how = 'inner')
    
    with open(f'../../data/nytfb/frontend_files/{sent_mod_name}_{nn}.pkl','wb') as f:
        pickle.dump(consolidated_df, f)
    print("DONE")

# with open(f'frontend_{sent_mod_name}_{nn}.pkl','rb') as f:
#     print(pickle.load(f).shape)
# print("DONE")
