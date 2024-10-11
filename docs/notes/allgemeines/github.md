---
title: GitHub
order: 500
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/vuejs.png',
    name: 'Max Muster',
    title: 'Lorem ipsum dolor sit amet',
    links: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ]
  }
]
</script>

# Mein GitHub-Profil

<VPTeamMembers size="small" :members="members" />
