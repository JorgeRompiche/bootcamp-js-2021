const form = document.getElementsByTagName("form")[0];
/** @type {HTMLInputElement} */
const inputCodigo = document.getElementById("codigo");
/** @type {HTMLInputElement} */
const inputNombre = document.getElementById("nombre");
/** @type {HTMLInputElement} */
const inputCantidad = document.getElementById("cantidad");
/** @type {HTMLInputElement} */
const inputPrecio = document.getElementById("precio");
/** @type {HTMLSelectElement} */
const selectCategoria = document.getElementById("categoria");

const tbody = document.getElementsByTagName("tbody")[0];
const cantidadTotalElement = document.getElementById("cantidad-total");
const precioTotalElement = document.getElementById("precio-total");
const granTotalElement = document.getElementById("gran-total");


const preloadedState = {
    producto: {},
    productos: []
}

let indice = 0;
const reducer = (state, action) => {
    if (action.type == "producto-agregado")
    {
        indice++;
        const producto = action.payload;
        const codigo = indice;
        const total = producto.cantidad * producto.precio;
        return {
            ...state, 
            productos: [
                ...state.productos, 
                {
                    ...producto,
                    codigo,
                    total
                }
            ]
        };
    }

    if(action.type == "producto-modificado")
    {
        const producto = action.payload;
        const productos = state.productos.slice();
        const codigo = producto.codigo;
        const total = producto.cantidad * producto.precio;
        const old = productos.find((item) => item.codigo == codigo);
        const index = productos.indexOf(old);
        productos[index] = {...producto, total};
        return {
            ...state,
            productos
        };
    }

    return state;
};

const store = Redux.createStore(reducer, preloadedState);

let latestState;

const unsuscribe = store.subscribe(() => {
    let currentState = store.getState();
    if(currentState != latestState)
    {
        latestState = currentState;
        console.log("estado: ", store.getState());
        renderTable(currentState.productos);
    }
});

function renderTable(productos)
{
    const filas = productos.map((item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${item.codigo}</td>
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>${item.precio}</td>
            <td>${item.total}</td>
            <td>
                <div class="btn-group">
                    <a title="Editar" href="#" onclick="onEdit(event)" class="btn btn-sm btn-outline-secondary">
                        <i class="bi bi-pencil-square"></i>
                    </a> 
                    <a title="Eliminar" href="#" onclick="onDelete(event)" class="btn btn-sm btn-outline-danger">
                        <i class="bi bi-trash"></i>
                    </a>
                </div>
            </td>
        `;
        return tr;
    });

    tbody.innerHTML = "";
    filas.forEach((tr) => {
        tbody.appendChild(tr); 
    });
}

store.dispatch({
    type: "producto-agregado",
    payload: {
        nombre: "prueba a",
        cantidad: 3,
        precio: 10,
        categoria: 2
    }
});

store.dispatch({
    type: "producto-modificado",
    payload: {
        codigo: 1,
        nombre: "prueba a v2",
        cantidad: 4,
        precio: 11,
        categoria: 1
    }
});

store.dispatch({
    type: "producto-agregado",
    payload: {
        nombre: "prueba b",
        cantidad: 6,
        precio: 8,
        categoria: 3
    }
});

store.dispatch({
    type: "producto-agregado",
    payload: {
        nombre: "prueba c",
        cantidad: 2,
        precio: 4,
        categoria: 4
    }
});