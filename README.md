# 🎰 Pictasino

Plataforma de juegos interactivos con componentes modernos.

## 📋 Prerrequisitos

- **Bun** (versión 1.0 o superior)

## 🛠️ Instalación

### 1. Instalar Bun

**Windows** (PowerShell):

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

**Linux/Mac**:

```bash
curl -fsSL https://bun.sh/install | bash
```

### 2. Instalar HeroUI CLI

```bash
bun add heroui-cli -g
```

## 🚀 Ejecutar el proyecto

```bash
bun run dev
```

Servidor disponible en `localhost:3000`

## 🧩 Componentes Optimizados

Usa solo lo que necesites:

```bash
# Ejemplo para botones
bun add @heroui/button
```

📦 Componentes independientes:

- `@heroui/button`
- `@heroui/code`
- `@heroui/input`
- `@heroui/kbd`
- `@heroui/link`
- `@heroui/listbox`
- `@heroui/navbar`
- `@heroui/snippet`
- `@heroui/switch`

## ⚠️ Nota Importante

Evita instalar el paquete completo `@heroui/react` si usas componentes individuales.
