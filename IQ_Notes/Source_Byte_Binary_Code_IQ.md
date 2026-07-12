# Source Code vs Byte Code vs Binary Code

## The Execution Pipeline

```
Source Code (.js)  ──▶  Byte Code (Ignition)  ──▶  Binary Code (TurboFan JIT)
  (You write it)         (V8 Interpreter)           (CPU executes it)
```

---

## Comparison Table

| Aspect | **Source Code** | **Byte Code** | **Binary / Machine Code** |
|---|---|---|---|
| **Definition** | Human-readable code written by a programmer in a high-level language | Intermediate representation between source and machine code, executed by a virtual machine | Raw instructions the CPU executes directly (1s and 0s / assembly) |
| **Readable by humans?** | Yes — designed for humans | Partially — still somewhat readable but not intended for humans | No — only readable as assembly mnemonics |
| **Who produces it?** | The developer (you) | The language runtime/interpreter (e.g., V8's Ignition) | The JIT compiler (e.g., V8's TurboFan) or an assembler |
| **When does it exist?** | Edit time (on disk) | Runtime (in memory, during execution) | Runtime (in memory, generated for hot paths) |
| **Portability** | Highly portable — runs anywhere the runtime exists | Portable across any platform with the same VM | Not portable — specific to CPU architecture (x86, ARM, etc.) |
| **Performance** | Not executed directly | Slowest — interpreted line by line | Fastest — executed natively by the CPU |
| **Lifetime** | Permanent — saved in `.js` files | Temporary — generated & discarded per session | Temporary — generated & optimized/discarded at runtime |
| **Storage** | Stored on disk as text | Stored in VM memory (not persisted) | Stored in CPU instruction cache / memory |

---

## Real Example Using Your Code

### 1. Source Code (what you wrote)

```javascript
console.log("Hello, the testing academy!");
```

- Plain text, UTF-8 encoded
- ~46 bytes on disk
- **Path:** `01_Chapter_Javascript/01_HellowWorld.js`

---

### 2. Byte Code (V8 Ignition — simplified)

Ignition bytecode is a sequence of 1-byte opcodes with operands. V8's bytecode for the above source roughly looks like:

```
[bytecode for console.log("Hello, the testing academy!")]

LdaSmi      [0]          ; Load Small Integer 0 into accumulator
Star        r0            ; Store accumulator to register r0
LdaConstant [0]           ; Load constant pool index 0 -> "Hello..."
Star        r1            ; Store to register r1
LdaGlobal   [1]           ; Load global variable at index 1 -> console
Star        r2            ; Store to register r2
LdaConstant [0]           ; Load constant pool index 0 -> "Hello..."
SendLazy    [2]           ; Call property at index 2 -> console.log(1 arg)
Return                    ; Return
```

- Each opcode is 1 byte (e.g., `0x00` = `LdaSmi`, `0x11` = `LdaGlobal`)
- Operands are ~1–4 bytes each
- Stored temporarily in V8's memory, **never written to disk**
- Executed by V8's **Ignition interpreter** (slower path)

---

### 3. Binary Code (x86-64 Assembly — what the CPU runs)

When V8's **TurboFan JIT** identifies a hot function, it compiles the bytecode into native machine code. For our example:

```asm
; x86-64 assembly (human-readable form of binary machine code)
; Actual binary would be raw bytes: 48 8B 05 ..., FF 15 ..., etc.

push    rbp                     ; 0x55
mov     rbp, rsp                ; 0x48 0x89 0xE5
lea     rcx, [rip + string]    ; Load address of "Hello, the testing academy!"
call    V8::ConsoleLog          ; Call the C++ runtime function
pop     rbp                     ; 0x5D
ret                             ; 0xC3

; In raw memory — this is what the CPU actually fetches & decodes:
; 55 48 89 E5 48 8D 0D ... FF 15 ... 5D C3
```

- Pure binary is just bytes: `55 48 89 E5 ...`
- Each byte (or group of bytes) is an instruction the CPU's decoder hardware understands
- Runs at **native speed** — no interpretation overhead
- Generated on-the-fly by TurboFan, cached, potentially optimized further or discarded

---

## Visual Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│  Your Editor                                                    │
│  ┌───────────────────────────────────────────────────────┐      │
│  │ console.log("Hello, the testing academy!");           │ ◄── Source Code
│  └───────────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼  (V8 Parser)
                              │
┌─────────────────────────────────────────────────────────────────┐
│  V8 Ignition Interpreter                                        │
│  ┌───────────────────────────────────────────────────────┐      │
│  │ LdaGlobal [1]  ── console                             │      │
│  │ LdaConstant[0] ── "Hello, the testing academy!"      │ ◄── Byte Code
│  │ SendLazy    [2] ── console.log(...)                   │      │
│  │ Return                                                │      │
│  └───────────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼  (TurboFan JIT — when hot)
                              │
┌─────────────────────────────────────────────────────────────────┐
│  CPU Execution (x86-64)                                         │
│  ┌───────────────────────────────────────────────────────┐      │
│  │ 55 48 89 E5 48 8D 0D ... FF 15 ... 5D C3            │ ◄── Binary Code
│  │                                                       │      │
│  │  CPU Instruction Decoder ──▶ ALU ──▶ Result printed  │      │
│  └───────────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Key Takeaway

| | Source Code | Byte Code | Binary Code |
|---|---|---|---|
| **You write it?** | ✅ Yes | ❌ No (auto-generated) | ❌ No (auto-generated) |
| **Stored on disk?** | ✅ Yes | ❌ No (in-memory only) | ❌ No (in-memory only) |
| **CPU understands?** | ❌ No | ❌ No | ✅ Yes |
| **Human can read?** | ✅ Yes | 🟡 Roughly | ❌ No (assembly needed) |
| **Fastest?** | N/A | No | ✅ Yes |
