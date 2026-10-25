# Hermes Agent plus git (and rsync) so it can work on the Portfolio repo.
FROM nousresearch/hermes-agent:latest
RUN apt-get update && apt-get install -y --no-install-recommends git rsync && rm -rf /var/lib/apt/lists/*
