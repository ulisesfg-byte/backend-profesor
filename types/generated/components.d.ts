import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBeneficios extends Struct.ComponentSchema {
  collectionName: 'components_shared_beneficios';
  info: {
    displayName: 'beneficios';
    icon: 'cup';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    icono: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedDetallescurso extends Struct.ComponentSchema {
  collectionName: 'components_shared_detallescursos';
  info: {
    displayName: 'detallescurso';
    icon: 'car';
  };
  attributes: {
    clave: Schema.Attribute.String;
    descripcion: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.beneficios': SharedBeneficios;
      'shared.detallescurso': SharedDetallescurso;
    }
  }
}
