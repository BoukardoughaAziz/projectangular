import { Foyer } from './Foyer';

export class Universite {
  idUniversite: number;
  nomUniversite: string;
  adresse: string;
  f: Foyer;

  constructor(idUniversite?: number, nomUniversite?: string, adresse?: string, f?: Foyer) {
    this.idUniversite = idUniversite || 0; // default value if not provided
    this.nomUniversite = nomUniversite || '';
    this.adresse = adresse || '';
    this.f = f ; // assuming Foyer can be instantiated without parameters
  }
}
