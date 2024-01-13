export interface UserRegister {
  idenCard: number
  password: string
  name: string
  lastName: string
  contact: string
  email: string
  birthday: string
  direcSpecific: string
  idVillage: number
  roles: Role[]
}

export interface Role {
  id: number
}