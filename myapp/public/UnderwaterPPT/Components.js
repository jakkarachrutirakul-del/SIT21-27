// Navbar Component
class NavbarComponent extends HTMLElement {
    connectedCallback() {
        // รับค่า active page จาก attribute
        const activePage = this.getAttribute('active') || 'index';
        
        this.innerHTML = `
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">
                        🌊 Underwater Learning
                    </a>
                    
                    <!-- Desktop Menu - Left Side -->
                    <div class="collapse navbar-collapse d-none d-lg-block">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link ${activePage === 'index' ? 'active' : ''}" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${activePage === 'lessons' ? 'active' : ''}" href="lessons.html">สื่อการเรียนรู้</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${activePage === 'videos' ? 'active' : ''}" href="videos.html">วิดีโอ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${activePage === 'minigame' ? 'active' : ''}" href="minigame.html">Mini Game</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${activePage === 'quiz' ? 'active' : ''}" href="quiz.html">แบบทดสอบ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${activePage === 'scores' ? 'active' : ''}" href="scores.html">คะแนน</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${activePage === 'map' ? 'active' : ''}" href="map.html">แผนที่ทะเล</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${activePage === 'about' ? 'active' : ''}" href="about.html">เกี่ยวกับเรา</a>
                            </li>
                        </ul>
                        
                        <!-- Right Side Buttons -->
                        <div class="d-flex align-items-center gap-3">
                            <button class="btn btn-link text-white" type="button">
                                <i class="bi bi-search" style="font-size: 1.3em;"></i>
                            </button>
                            <div class="dropdown">
                                <button class="btn btn-link text-white dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    <i class="bi bi-globe" style="font-size: 1.3em;"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item active" href="#">ไทย (TH)</a></li>
                                    <li><a class="dropdown-item" href="#">English (EN)</a></li>
                                    <li><a class="dropdown-item" href="#">日本語 (JP)</a></li>
                                    <li><a class="dropdown-item" href="#">中文 (CN)</a></li>
                                </ul>
                            </div>
                            <a href="login.html" class="btn btn-danger rounded-pill px-4">เข้าสู่ระบบ</a>
                        </div>
                    </div>
                    
                    <!-- Mobile Menu Button -->
                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <!-- Mobile Full Screen Menu -->
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title">🌊 Underwater Learning</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link ${activePage === 'index' ? 'active' : ''}" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${activePage === 'lessons' ? 'active' : ''}" href="lessons.html">สื่อการเรียนรู้</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${activePage === 'videos' ? 'active' : ''}" href="videos.html">วิดีโอ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${activePage === 'minigame' ? 'active' : ''}" href="minigame.html">Mini Game</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${activePage === 'quiz' ? 'active' : ''}" href="quiz.html">แบบทดสอบ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${activePage === 'scores' ? 'active' : ''}" href="scores.html">คะแนน</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${activePage === 'map' ? 'active' : ''}" href="map.html">แผนที่ทะเล</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${activePage === 'about' ? 'active' : ''}" href="about.html">เกี่ยวกับเรา</a>
                        </li>
                        <li class="nav-item">
                            <hr class="text-white my-3">
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">🌐 เปลี่ยนภาษา</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="login.html">🔑 เข้าสู่ระบบ</a>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
}

// Footer Component
class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="container">
                    <p>© 2025 Underwater Learning - เรียนรู้โลกใต้น้ำอย่างสนุกสนาน</p>
                </div>
            </footer>
        `;
    }
}

// Bubbles Component
class BubblesComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
        `;
    }
}

// Register custom elements
customElements.define('app-navbar', NavbarComponent);
customElements.define('app-footer', FooterComponent);
customElements.define('app-bubbles', BubblesComponent);