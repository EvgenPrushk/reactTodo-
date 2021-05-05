import React from "react";

function Bold(props) {
  return <span >{props.children}</span>;
}

function App() {
  return (
    <div className="py-1 application container d-flex flex-column align-items-stretch">
    <div className="card h-100">
        <div className="card-header">
            <h3 className="card-title">Todo application</h3>
        </div>
        <input type="text" className="form-control" />
        <div className="ml-auto">
            <div className="brn-group">
                <button type="button" className="btn btn-primary">Выполниить</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        </div>
        <div className="overflow-auto">
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span>Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span className="item-done">Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span >Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span >Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span >Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span >Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span >Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span >Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span >Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span >Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span >Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span >Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span >Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span >Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span >Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label >
                        <input type="checkbox" className="mr-3" />
                        <span >Lorem ipsum dolor sit amet, consectetur </span>
                    </label>
                    <small className="text-muted">12.04.2020</small>
                </li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default App;
