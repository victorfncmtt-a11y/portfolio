#!/usr/bin/env python3
import json
import sys
import os

def save_strategy_artifact(brand_name, artifact_type, content):
    output_dir = os.path.join(os.getcwd(), "output", brand_name)
    os.makedirs(output_dir, exist_ok=True)
    
    filename = f"{artifact_type}.md"
    filepath = os.path.join(output_dir, filename)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    
    print(f"Successfully generated and verified asset at: {filepath}")

if __name__ == "__main__":
    # Expects arguments passed from the agent's code execution terminal
    if len(sys.argv) < 4:
        print("Error: Missing parameters. Usage: script.py <brand_name> <artifact_type> <content>")
        sys.exit(1)
        
    brand_name = sys.argv[1]
    artifact_type = sys.argv[2]
    content = sys.argv[3]
    
    save_strategy_artifact(brand_name, artifact_type, content)