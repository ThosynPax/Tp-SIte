import json

log_file = "/home/thosyn/.gemini/antigravity-ide/brain/15aa6061-7c4b-423f-8895-23b5451c5c70/.system_generated/logs/transcript_full.jsonl"

file_content = ""

try:
    with open(log_file, 'r') as f:
        for line in f:
            data = json.loads(line)
            if 'tool_calls' in data:
                for call in data['tool_calls']:
                    if 'TargetFile' in call.get('args', {}) and 'LabMagazine.js' in call['args']['TargetFile']:
                        if call['name'] == 'write_to_file':
                            file_content = call['args'].get('CodeContent', '')
                        elif call['name'] == 'replace_file_content':
                            target = call['args'].get('TargetContent', '')
                            replacement = call['args'].get('ReplacementContent', '')
                            if target in file_content:
                                file_content = file_content.replace(target, replacement)
                            else:
                                print(f"Target not found in step {data.get('step_index')}")
                        elif call['name'] == 'multi_replace_file_content':
                            chunks = call['args'].get('ReplacementChunks', [])
                            for chunk in chunks:
                                target = chunk.get('TargetContent', '')
                                replacement = chunk.get('ReplacementContent', '')
                                if target in file_content:
                                    file_content = file_content.replace(target, replacement)
                                else:
                                    print(f"Target not found in multi step {data.get('step_index')}")

    with open("replayed_LabMagazine.js", "w") as out:
        out.write(file_content)
    print("Replayed successfully!")
except Exception as e:
    print(e)
