import json
import sys

log_file = "/home/thosyn/.gemini/antigravity-ide/brain/15aa6061-7c4b-423f-8895-23b5451c5c70/.system_generated/logs/transcript_full.jsonl"
largest_content = ""

try:
    with open(log_file, 'r') as f:
        for line in f:
            data = json.loads(line)
            if 'tool_calls' in data:
                for call in data['tool_calls']:
                    if call['name'] == 'write_to_file' and 'LabMagazine.js' in call['args'].get('TargetFile', ''):
                        content = call['args'].get('CodeContent', '')
                        if len(content) > len(largest_content):
                            largest_content = content
                    elif call['name'] == 'replace_file_content' or call['name'] == 'multi_replace_file_content':
                        if 'LabMagazine.js' in call['args'].get('TargetFile', ''):
                            print(f"Found replace at step {data.get('step_index')}")

    if largest_content:
        print(f"Found base file of length {len(largest_content)}")
        with open("recovered_LabMagazine.js", "w") as out:
            out.write(largest_content)
    else:
        print("No write_to_file found for LabMagazine.js")
except Exception as e:
    print(e)
