export const HTTP_ROUTES ={
    persona:{
        getPersona:(documento: string,tipoDocumento:string) => `/persona?tipoDocumento=${tipoDocumento}&numeroDocumento=${documento}`,
    }
}