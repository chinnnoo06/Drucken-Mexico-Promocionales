export const slugify = (text) =>
    text
        .toString()
        .normalize("NFD")                   // separa letras de sus acentos
        .replace(/[\u0300-\u036f]/g, "")    // elimina los acentos
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")               // espacios → guiones
        .replace(/[^a-z0-9-]/g, "")         // quita cualquier caracter que no sea válido
        .replace(/-+/g, "-")                // colapsa guiones múltiples
        .replace(/^-+|-+$/g, "");           // quita guiones al inicio/final
