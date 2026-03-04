---
description: how to configure Vapi for projects in this network
---

# Vapi Configuration Rules

When configuring Vapi for any project in this network, follow these rules to ensure connectivity and avoid errors.

## Key Configuration

1.  **Vapi Public Key**: ALWAYS use the Master Account key.
    -   Key: `5cf7462d-30fe-4d70-9ea1-89ce0bd65ec5`
    -   This key remains the same for ALL projects.
2.  **Assistant ID**: Use the unique ID specific to the project.
    -   Look in the project's existing files or documentation for the correct assistant ID.
3.  **No Mixing**: Do **NOT** set the Public Key and Assistant ID to the same value. This will cause a "Fout opgetreden" error.

## Implementation Example

In `VoiceDemo.tsx`:

```typescript
const vapi = new Vapi("5cf7462d-30fe-4d70-9ea1-89ce0bd65ec5"); // Master Public Key
const assistantId = "PROJECT_SPECIFIC_ID"; // Unique Assistant ID
```
