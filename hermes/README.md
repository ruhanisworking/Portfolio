# hermes/

Skills for Ruhan's Hermes Agent, the one on his VM that he talks to over
Telegram. They are versioned here, and on the VM each one is symlinked into
`~/.hermes/skills/ruhan/` from the repo clone at `/opt/data/work/Portfolio`.

| Skill | For |
|---|---|
| `ruhan-commander` | the Commander dashboard at ruhan.lol: data files and pages |
| `ruhan-frontend` | the Ember design system: points Hermes at `.claude/skills/ruhan-frontend` and DESIGN.md |
| `ruhan-business` | who Ruhan is, what he sells, where the plans are |

`ruhan-mail` (the mail rules) lives only on the VM because it names private
addresses. A copy with placeholders is in `.claude/skills/hermes-vm/`.

After editing a skill here: push, then on the VM run
`git -C /opt/data/work/Portfolio pull` and restart `hermes`. See the
`hermes-vm` Claude skill.
