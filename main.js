// ─── Auth Helpers ──────────────────────────────────────────────────────────────
function getRole() { return localStorage.getItem('role'); }
function setRole(role) { localStorage.setItem('role', role); }
function clearAuth() { localStorage.clear(); }

function requireRole(required) {
  const role = getRole();
  if (!role) { window.location.href = 'login.html'; return; }
  if (required && role !== required) {
    window.location.href = role === 'student' ? 'student-home.html' : 'industry-dashboard.html';
  }
}

// ─── LocalStorage Data Helpers ─────────────────────────────────────────────────
function getSavedProjects() {
  return JSON.parse(localStorage.getItem('savedProjects') || '[]');
}
function saveProject(id) {
  const saved = getSavedProjects();
  if (!saved.includes(id)) { saved.push(id); localStorage.setItem('savedProjects', JSON.stringify(saved)); }
}
function unsaveProject(id) {
  const saved = getSavedProjects().filter(s => s !== id);
  localStorage.setItem('savedProjects', JSON.stringify(saved));
}
function isProjectSaved(id) { return getSavedProjects().includes(id); }

function getApplications() {
  const stored = localStorage.getItem('applications');
  return stored ? JSON.parse(stored) : [...mockApplications];
}
function saveApplications(apps) { localStorage.setItem('applications', JSON.stringify(apps)); }

function getProjects() {
  const stored = localStorage.getItem('projects');
  return stored ? JSON.parse(stored) : [...mockProjects];
}
function saveProjects(projects) { localStorage.setItem('projects', JSON.stringify(projects)); }

function getStudentProfile() {
  const stored = localStorage.getItem('studentProfile');
  return stored ? JSON.parse(stored) : { ...currentStudent };
}
function saveStudentProfile(profile) { localStorage.setItem('studentProfile', JSON.stringify(profile)); }

// ─── AI Match Score ─────────────────────────────────────────────────────────────
function computeMatchScore(teamSkills, requiredSkills) {
  if (!requiredSkills || requiredSkills.length === 0) return 0;
  const teamNorm = teamSkills.map(s => s.toLowerCase().trim());
  const reqNorm = requiredSkills.map(s => s.toLowerCase().trim());

  // Exact matches
  let exactMatches = reqNorm.filter(r => teamNorm.includes(r)).length;

  // Partial/synonym matches (weighted 0.5)
  const synonymGroups = [
    ['python', 'py'],
    ['machine learning', 'ml', 'deep learning', 'ai'],
    ['javascript', 'js', 'node.js', 'react', 'vue'],
    ['sql', 'database', 'data engineering'],
    ['tensorflow', 'pytorch', 'keras'],
    ['matlab', 'simulink'],
    ['embedded systems', 'c++', 'fpga'],
    ['r', 'biostatistics', 'statistics'],
    ['ui/ux', 'figma', 'user research'],
    ['sustainability', 'environmental'],
    ['computer vision', 'opencv', 'image processing']
  ];

  let partialScore = 0;
  reqNorm.forEach(req => {
    if (teamNorm.includes(req)) return; // already counted
    const group = synonymGroups.find(g => g.includes(req));
    if (group && group.some(syn => teamNorm.includes(syn))) {
      partialScore += 0.5;
    }
  });

  const rawScore = (exactMatches + partialScore) / reqNorm.length;
  // Add some variance based on team size (bonus for multi-member teams)
  const teamBonus = Math.min(teamSkills.length / 10, 0.1);
  const finalScore = Math.min(rawScore + teamBonus, 1.0);

  return Math.round(finalScore * 100);
}

// ─── Status Badge ───────────────────────────────────────────────────────────────
function statusBadge(status) {
  const map = {
    'open':        { dot: 'bg-emerald-400', text: 'text-emerald-700', bg: 'bg-emerald-50', label: 'Open' },
    'in-progress': { dot: 'bg-amber-400',   text: 'text-amber-700',   bg: 'bg-amber-50',   label: 'In Progress' },
    'completed':   { dot: 'bg-blue-400',    text: 'text-blue-700',    bg: 'bg-blue-50',    label: 'Completed' },
    'draft':       { dot: 'bg-gray-400',    text: 'text-gray-600',    bg: 'bg-gray-100',   label: 'Draft' }
  };
  const s = map[status] || map['draft'];
  return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${s.bg} ${s.text}">
    <span class="w-1.5 h-1.5 rounded-full ${s.dot}"></span>${s.label}
  </span>`;
}

// ─── Skill Tag ──────────────────────────────────────────────────────────────────
function skillTag(skill, removable = false, onRemove) {
  if (removable) {
    return `<span class="skill-tag inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 cursor-default">
      ${skill}
      <button onclick="${onRemove}" class="ml-1 text-orange-400 hover:text-orange-700 transition-colors">×</button>
    </span>`;
  }
  return `<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">${skill}</span>`;
}

// ─── Toast Notification ─────────────────────────────────────────────────────────
function showToast(message, type = 'success') {
  const colors = { success: 'bg-gray-900', error: 'bg-red-600' };
  const toast = document.createElement('div');
  toast.className = `fixed bottom-6 left-1/2 -translate-x-1/2 ${colors[type]} text-white px-5 py-3 rounded-xl text-sm font-medium shadow-2xl z-50 transition-all duration-300 opacity-0 translate-y-2`;
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.remove('opacity-0', 'translate-y-2');
  });
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ─── Nav Active State ───────────────────────────────────────────────────────────
function setActiveNav() {
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('[data-nav]').forEach(el => {
    if (el.dataset.nav === current) {
      el.classList.add('text-orange-600', 'font-semibold');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActiveNav);