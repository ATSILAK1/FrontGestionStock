
export interface User {
    username: string;        // Nom d'utilisateur
    name: string;           // Nom de l'utilisateur
    isAdmin: boolean;       // Indique si l'utilisateur est admin
    isSuperuser: boolean;   // Indique si l'utilisateur est super utilisateur
    isActive: boolean;      // Indique si l'utilisateur est actif
}


export interface Produit
{
    prix:number;
    nom:string;
    description:string;
    quantiteStock:number;
}

export class Fournisseur
{
    nomFournisseur!:string
    telephoneFournisseur!:string
}

export class TransactionAchat
 {
    fournisseurTransactionAchat!: number ; // Nom du fournisseur
    informationTransaction!: string ;
    quantiteTransaction!:number;
    dateTransaction!: Date; // Date de la transaction
    montantTransaction!: number; // Montant total de la transaction
    produitTransaction!:number;}

export class TransactionVente
{
    informationTransaction!: string ;
    quantiteTransaction!:number;
    dateTransaction!: Date; // Date de la transaction
    montantTransaction!: number; // Montant total de la transaction
    produitTransaction!:number;
}
