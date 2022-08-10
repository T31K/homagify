export default function SideNav() {
  return (
    <div class="sidenav" id="sidenav">
      <ul>
        <li>
          {" "}
          <a class="sidenav-list-item" href="/featured">
            {" "}
            <i class="fas fa-user icon"></i>
            <em>Users</em>
          </a>
        </li>
        <li>
          {" "}
          <a class="sidenav-list-item" href="/new_releases">
            {" "}
            <i class="fas fa-tasks icon"></i>
            <em>Projects</em>
          </a>
        </li>
        <li>
          {" "}
          <a class="sidenav-list-item active" href="#0">
            {" "}
            <i class="fas fa-calendar icon"></i>
            <em>Events</em>
          </a>
        </li>
        <li>
          {" "}
          <a class="sidenav-list-item" href="#0">
            {" "}
            <i class="fas fa-toolbox icon"></i>
            <em>Preferences</em>
          </a>
        </li>
        <li>
          {" "}
          <a class="sidenav-list-item" href="#0">
            {" "}
            <i class="fas fa-comments icon"></i>
            <em>Feedback</em>
          </a>
        </li>
        <li>
          {" "}
          <a class="sidenav-list-item" href="#0">
            {" "}
            <i class="fas fa-lightbulb icon"></i>
            <em>Suggestions</em>
          </a>
        </li>
      </ul>
    </div>
  );
}
