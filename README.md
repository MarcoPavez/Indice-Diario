# Índice Diario

Índice Diario es una Aplicación de Página Única (SPA, por sus siglas en inglés) que despliega información relacionada a distintos indicadores atingentes a la realidad económica del país. 

Dicha información puede ser el valor moneda o el porcentaje del indicador, dependiendo de su naturaleza. A futuro, se espera implementar mejoras visuales, como gráficos de series temporales, para tener una comprensión más acertada de la evolución del indicador.

Índice Diario consume una API externa desde el sitio web www.mindicador.cl a través de dos atributos principales: el tipo de indicador y la fecha a consultar. Dicha API utiliza datos emitidos por el Banco Central de Chile.

## Indicadores

Los indicadores disponibles para su consulta, según el sitio web www.mindicador.cl, son:

- **Unidad de Fomento (UF)**: Valores desde 1977   hasta hoy.
- **Índice de Valor Promedio (IVP)**: Valores desde 1990 hasta hoy.
- **Dólar**: Valores desde 1984 hasta hoy.
- **Dólar de intercambio**: Valores desde 1988 hasta hoy.
- **Euro**: Valores desde 1999  hasta hoy.
- **Índice de Precio al Consumidor (IPC)**: Valores desde 1928 hasta hoy.
- **Unidad Tributaria Mensual (UTM)**: Valores desde 1990 hasta hoy.
- **Índice Mensual de Actividad Económico (IMACEC)**: Valores desde 1997 hasta hoy.
- **Tasa de Política Monetaria (TPM)**: Valores desde 2001 hasta hoy.
- **Libra de Cobre**: Valores desde 2012 hasta hoy.
- **Tasa de Desempleo**: Valores desde 2009 hasta hoy.
- **Bitcoin**: Valores desde 2009 hasta hoy.

## Guía de estilos y mock-up

La guía de estilos y los distintos bosquejos están disponibles en [Figma Índice Diario](https://www.figma.com/file/sWJNi9pD6EHVHBTAbjNBsH/Gu%C3%ADa-de-estilos-y-mockups-%C3%8Dndice-Diario?node-id=0%3A1&t=9pHTQsqutB3gbbyh-1)

## Demo

### Zona pública

Disponible en:

[Ingreso zona pública](https://marcopavez.github.io/Indice-Diario-Cliente/inicio.html)

### Zona privada

Disponible en:

[Ingreso zona privada](https://marcopavez.github.io/Indice-Diario-Cliente/ingreso.html)

Las credenciales de ingreso son: 
**Correo electrónico:** pruebademo@gmail.com
**Contraseña:** Pruebademo1.

## Referencias API

Desplegado en [Glitch](https://placid-seen-raven.glitch.me/)

#### Ingresar en la página

```http
  POST /ingreso
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `correo` | `string` | **Required**. Correo electrónico |
|  `contrasena` | `string` | **Requerido**. Contraseña |

#### CRUD - Información Adicional del Usuario

```http
  GET POST PUT DELETE /infoUsuarioAdicional
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nombre`      | `string` | **Required**. Nombre   |
| `apellido`      | `string` | **Required**. Apellido |
| `nombreUsuario`      | `string` | Nombre de usuario. Personalizable. |
| `correo`      | `string` | **Required**. Correo electrónico |
| `genero`      | `string` | **Required**. Género de la persona |
| `fechaNacimiento`      | `date` | **Required**. Fecha de nacimiento |
| `paisResidencia`      | `string` | País de residencia |

#### Obtener Consultas de Indicadores

```http
  GET POST /registro-consultas
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nombreIndicador`      | `string` | **Required**. Nombre del indicador a consultar   |
| `fechaConsultada` | `date` | **Required**. Fecha a consultar | 

#### Crear Consulta de Indicadores

```http
  POST /registro-consultas
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nombreIndicador`      | `string` | **Required**. Nombre del indicador a consultar   |
| `fechaConsultada` | `date` | **Required**. Fecha a consultar | 

#### Eliminar Consulta de indicadores

```http
  DELETE /registro-consultas?id=${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID del registro a eliminar |

## Créditos 

@lee_om (en Twitter), desarrollador del sitio web www.mindicador.cl
