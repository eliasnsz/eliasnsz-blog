import fs from 'node:fs';
import path from 'node:path';

const title = process.argv.slice(2).join(' ') || 'Novo Post';
const slug = title
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^\w\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/--+/g, '-')
  .trim();

const now = new Date();
const year = now.getFullYear().toString();
const month = (now.getMonth() + 1).toString().padStart(2, '0');
const day = now.getDate().toString().padStart(2, '0');

const dir = path.join('src', 'content', year, month, day);
const fileName = `${slug}.md`;
const filePath = path.join(dir, fileName);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const template = `---
title: "${title}"
description: ""
pubDate: ${now.toISOString().split('T')[0]}
draft: true
tags: []
---

Escreva seu post aqui...
`;

if (fs.existsSync(filePath)) {
  console.error(`Erro: O arquivo ${filePath} já existe.`);
  process.exit(1);
}

fs.writeFileSync(filePath, template);
console.log(`Post criado com sucesso: ${filePath}`);
