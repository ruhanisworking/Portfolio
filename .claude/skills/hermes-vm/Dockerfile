# Hermes Agent plus the tools Ruhan's automations need:
#   git, rsync          work on the Portfolio repo and publish the Commander
#   python3-icalendar,  read Google Calendar's iCal feed (system python3,
#   recurring-ical-events, tzdata   not the Hermes venv)
FROM nousresearch/hermes-agent:latest
RUN apt-get update && apt-get install -y --no-install-recommends \
      git rsync python3-icalendar python3-recurring-ical-events tzdata \
    && rm -rf /var/lib/apt/lists/*
