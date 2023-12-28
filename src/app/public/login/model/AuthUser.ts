
/**
 * Interfaz AuthUser
 *
 * Representa la estructura de objetos que contienen información relacionada
 * con la autenticación de un usuario.
 */
export interface AuthUser {

  authorities:Authority[];
  /**
   * Identificador único del usuario (IDENCARD).
   */
  sub: string;

  /**
   * Nombre completo del usuario.
   */
  fullName: string;

  /**
   * Token de autenticación asociado al usuario.
   */
  token: string;

  /**
   * Fecha de nacimiento del usuario en formato de cadena.
   */
  fechaNacimiento: string;

  /**
   * Correo electrónico del usuario.
   */
  email: string;

  /**
   * Tiempo de emisión del token (fecha de creación).
   */
  iat: number;

  /**
   * Tiempo de expiración del token (fecha de expiración).
   */
  exp: number;
}


interface Authority {
  authority: string;
}