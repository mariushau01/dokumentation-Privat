---
title: GitHub
order: 500
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/mariushau01.png',
    name: 'Marius Hau',
    title: 'Schüler an der BHAK Zell am See',
    links: [
      { icon: 'github', link: 'https://github.com/mariushau01' },
    ]
  }
]
</script>

# Mein GitHub-Profil

<VPTeamMembers size="small" :members="members" />
