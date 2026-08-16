export class BaseDatos {
  #id;
  #nombre;
  #descripcion;
  #icono;

  constructor({ id, nombre, descripcion, icono }) {
    this.#id = id;
    this.#nombre = nombre;
    this.#descripcion = descripcion;
    this.#icono = icono;
  }

  get id() { return this.#id; }
  get nombre() { return this.#nombre; }
  get descripcion() { return this.#descripcion; }
  get icono() { return this.#icono; }
  get esquemaSQL() { return ''; }
}
