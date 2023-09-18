// SideBar.js
import "bootstrap-icons/font/bootstrap-icons.css";

function SideBar() {
  return (
    <div className="d-flex flex-column bg-dark text-white p-4">
      <ul className="nav nav-pills flex-column p-0 m-0">
        <li className="nav-item ">
          <a href="" className="nav-link text-white">
            <i className="bi bi-speedometer me-2 fs-5"></i>
            <span className="fs-5">Dashboard</span>
          </a>
        </li>
        <li className="nav-item ">
          <a href="" className="nav-link text-white">
            <i className="bi bi-clipboard-check me-2 fs-5"></i>
            <span className="fs-5">Task Queue</span>
          </a>
        </li>
        <li className="nav-item ">
          <a href="" className="nav-link text-white">
            <i className="bi bi-hdd-network-fill me-2 fs-5"></i>
            <span className="fs-5">Network Providers</span>
          </a>
        </li>
        <li className="nav-item ">
          <a href="" className="nav-link text-white">
            <i className="bi bi-wifi-off me-2 fs-5"></i>
            <span className="fs-5">Non Network Provider</span>
          </a>
        </li>
        {/* copy start */}
        <li className="nav-item ">
          <a href="" className="nav-link text-white">
            <i className="bi bi-file-earmark-break-fill me-2 fs-5"></i>
            <span className="fs-5">My Document</span>
          </a>
        </li>
        <li className="nav-item ">
          <a href="" className="nav-link text-white">
            <i className="bi bi-person-fill me-2 fs-5"></i>
            <span className="fs-5">Profile</span>
          </a>
        </li>
        <li className="nav-item ">
          <a href="" className="nav-link text-white">
            <i className="bi bi-people-fill me-2 fs-5"></i>
            <span className="fs-5">User Management</span>
          </a>
        </li>
        <li className="nav-item ">
          <a href="" className="nav-link text-white">
            <i className="bi bi-search me-2 fs-5"></i>
            <span className="fs-5">Audit Trail</span>
          </a>
        </li>
        <li className="nav-item ">
          <a href="" className="nav-link text-white">
            <i className="bi bi-headset me-2 fs-5"></i>
            <span className="fs-5">Support</span>
          </a>
        </li>
        <li className="nav-item  ">
          <a href="" className="nav-link text-white">
            <i className="bi bi-binoculars-fill me-2 fs-5"></i>
            <span className="fs-5">Search</span>
          </a>
        </li>
        <li className="nav-item ">
          <a href="" className="nav-link text-white">
            <i className="bi bi-ethernet me-2 fs-5"></i>
            <span className="fs-5">Master Configurator</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
