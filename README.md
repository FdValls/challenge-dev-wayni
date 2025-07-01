# 🧩 Challenge Técnico WayniWallet - [Fernando Valls]

> Desarrollo de una aplicación utilizando React, Zustand, Tanstack (React Query) y Tailwind CSS.  
> Proyecto creado con **Create Next App + TypeScript** junto a herramientas modernas para su correcta validación, controlar estados globales, consumir API's, formatear código **(Prettier)** y mejorar la calidad de código con **esLint**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-333333?style=for-the-badge&logo=react&logoColor=white)
![ReactQuery](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

---
## Instrucciones de instalación e inicialización y login.

- Tener instalado en nuestra computadora NodeJS, muy importante asegurarse de que la version sea igual o superior a 20.11.0 o LTS (ultima version) en su defecto.
- Clonar o descargar el repositorio de [GIT](https://github.com/FdValls/challenge-dev-wayni)
- Una vez descargado, descomprimirlo y dirigirse a la raiz del proyecto para instalar las dependencias con el siguiente script:
```bash
npm install
```
Una vez finalizada la instalación, estamos listos para ejecutar nuestro entorno **dev**, ingresando el siguiente comando en la consola **bash**

```bash
npm run dev
```

Una vez finalizada la inicialización del proyecto nos brindará un link local para acceder [http://localhost:3000/login](http://localhost:3000/login), luego en el formulario de **Login**, debemos ingresar las siguientes credenciales para acceder, caso contrario se nos notificara de credenciales inválidas o campos oblicatorios:

```bash
Username: blueelephant921
Password: cccc
```
## 🏛️ Documentación de Arquitectura:

🔹 Principios **SOLID** aplicados

**✅ Single Responsibility Principle (SRP)**

Cada módulo, componente o función del sistema tiene una única responsabilidad clara.

Ejemplos en el proyecto:

- randomUsers.ts: encargado de agrupar los métodos para realizar llamadas externas.

- loginSchema.ts y sendAgainSchema contienen exclusivamente la lógica de validación para sus respectivos formularios.

- userStore.ts gestiona exclusivamente el estado global del usuario. 

- ClientProviders.tsx proveer y maneja los contextos necesarios para el entorno del cliente.

**✅ Inversión de Control (IoC)**

Se aplica IoC para lograr un desacoplamiento fuerte entre la lógica de negocio, la fuente de datos y los componentes. Esto permite que cada módulo solo se preocupe por su rol, sin conocer cómo se implementa la lógica interna:

**📦 ¿Cómo aplicamos IoC en este proyecto?**

1. Abstracción mediante interfaces
Se define una interfaz IRandomService que describe las funciones esperadas para obtener usuarios:

```typescript
export interface IRandomService {
    findRandomMainUser(): Promise<IRandomUserResponseProps>;
    findRandomUsers(count: number): Promise<IRandomUserResponseProps>;
}
```
Esto permite inyectar cualquier clase que implemente la interfaz, sin que los consumidores deban conocer su implementación concreta.

2. Implementación concreta desacoplada
La clase RandomService implementa esa interfaz y encapsula la lógica para obtener los datos desde una API externa:

```typescript
export class RandomService implements IRandomService {
  findRandomMainUser = async () => { ... };
  findRandomUsers = async (count: number) => { ... };
}
```
3. Implementación a través de **custom hooks**

```typescript
export const useRandomMainUser = () => {
    const query = useQuery({
        queryKey: ["randomMainUser"],
        queryFn: () => findRandomMainUser(),
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });

    return query;
};
```
**✅ Contexto global para el intercambio de datos entre páginas**

1. Con Zustand se crean estados globales almacenados en el localStorage para luego ser consumido en distintas paginas y componentes. Tambien se consumen datos temporales no almacenados en el dispositivo

## 🧱 Tecnologías empleadas en el sistema

| Herramienta         | Detalle                                                       |
|---------------------|-----------------------------------------------------------------|
| **TypeScript**      | Tipado estático para mayor escalabilidad y legibilidad en el código                        |
| **Zustand**         | Estado global liviano y escalable                               |
| **TanStack/React Query** | Manejo eficiente de datos asincrónicos y caché            |
| **Tailwind CSS**    | Estilos rápidos y responsivos con utilidad, configuración de screen para distintos tamaños, creación rápida de clase con **@apply**                    |
| **App Router** | Organización de páginas basada en carpetas dentro de **app** (app/ruta/page/, por ejemplo **home/page.tsx**) |
| **Zod**             | Validación de formularios y estructuras de datos complejos                            |
| **React-Toastify**  | Notificaciones simples y personalizables                        |
| **Iconify**         | Sistema flexible y rápido de íconos              |
| **ESLint** | Para detectar errores, bugs potenciales, variables no usadas, cantidad de espacios de identación, el uso o no de **'""'**, entre muchas otras validaciones. Es customizable en el archivo **eslint.config.mjs**   |
| **Prettier** | Formatea automáticamente el código: indentación, espacios, saltos de línea, longitud de líneas, posición de llaves |

---

## 📁 Estructura del Proyecto

```bash
src/
│
├── app/ # Ruteo global de la app
├── components/ # Componentes reutilizables
├── hooks/ # Custom hooks
├── models/ # Modelo de validaciones
├── services/ # Interfaces e implementaciones de consumos externos, API's
├── store/ # Zustand store para el manejo de contextos globales
├── styles/ # Tailwind + estilos globales
├── utils/ # Helpers y utilidades
└── wrappers/ # Protección de acceso
```
