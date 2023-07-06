export class Usuario {
  constructor(
    public _id: String,
    public nombre: String,
    public apellido: String,
    public email: String,
    public usuario: String,
    public password: String,
    public rol: String,
    public puesto : String,
    public departamento : String,
    public celular_corporativo  : String,
    public extencion : String,
    public sucursal : String,
    public pais : String,
    public factura:[{}],
    
  ) {}
}
