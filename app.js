// ════════════════════════════════════════════════════════════════
// MR. CINEMAN - GLOBAL MULTI-USER BLOG PLATFORM
// Backend integration with comment system
// ════════════════════════════════════════════════════════════════

// Firebase/Backend Configuration (Replace with your actual backend)
const API_BASE_URL = 'https://api.example.com'; // Replace with your backend
const STORAGE_KEY = 'mr_cineman_user';

// Simulated database (Replace with real backend calls)
const mockDatabase = {
  servers: [
    { id: 'us-east-1', name: 'US East Server', region: 'United States' },
    { id: 'eu-west-1', name: 'EU West Server', region: 'Europe' },
    { id: 'ap-south-1', name: 'Asia Pacific Server', region: 'Asia' },
    { id: 'us-west-2', name: 'US West Server', region: 'United States' }
  ],
  admins: {
    'us-east-1': {
      'admin001': 'password123',
      'cineman_master': 'mastercinema2025'
    },
    'eu-west-1': {
      'admin_eu': 'europass456',
      'reviewer_elite': 'elitefilm789'
    },
    'ap-south-1': {
      'admin_asia': 'asiapass111',
      'cinema_asia': 'asiacine222'
    },
    'us-west-2': {
      'admin_west': 'westpass333',
      'movie_critic': 'criticpass444'
    }
  },
  posts: [
    {
      id: 'post_001',
      serverId: 'us-east-1',
      title: 'Oppenheimer - A Masterpiece of Tension',
      genre: 'Drama',
      body: 'Christopher Nolan\'s Oppenheimer is an extraordinary achievement in cinema. The film brilliantly captures the moral complexity of J. Robert Oppenheimer and the Manhattan Project. Cillian Murphy delivers a career-defining performance, navigating the internal conflicts of a man haunted by his creation.\n\nThe direction is impeccable, with Nolan\'s signature attention to detail evident in every frame. The cinematography is stunning, and Hans Zimmer\'s score amplifies the psychological tension throughout. This is essential viewing for anyone who appreciates intelligent, challenging cinema.',
      rating: 9,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23654321" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="40" fill="white" text-anchor="middle" dy=".3em"%3EOppenheimer%3C/text%3E%3C/svg%3E',
      adminId: 'cineman_master',
      adminServer: 'us-east-1',
      likes: 342,
      dislikes: 12,
      comments: [
        {
          id: 'comment_001',
          author: 'Film Enthusiast',
          text: 'Absolutely stunning film. Nolan has done it again!',
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
        },
        {
          id: 'comment_002',
          author: 'Cinema Lover',
          text: 'The three-hour runtime flies by. Every minute is gripping.',
          timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
        },
        {
          id: 'comment_003',
          author: 'Movie Buff',
          text: 'Cillian Murphy deserved the Oscar. Phenomenal performance.',
          timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
        }
      ],
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    },
    {
      id: 'post_002',
      serverId: 'eu-west-1',
      title: 'Barbie - Fun, Colorful, and Surprisingly Deep',
      genre: 'Comedy',
      body: 'Greta Gerwig\'s Barbie is a joyride that manages to be both entertaining and thought-provoking. The neon-soaked aesthetic is immediately captivating, and the film\'s humor lands consistently throughout.\n\nMargot Robbie and Ryan Gosling have incredible chemistry, and their comedic timing is impeccable. The film cleverly subverts expectations while celebrating what makes Barbie iconic. It\'s a film that works on multiple levels - a fun summer blockbuster and a commentary on identity, purpose, and societal expectations.',
      rating: 8,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ff69b4" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="40" fill="white" text-anchor="middle" dy=".3em"%3EBarbie%3C/text%3E%3C/svg%3E',
      adminId: 'admin_eu',
      adminServer: 'eu-west-1',
      likes: 428,
      dislikes: 89,
      comments: [
        {
          id: 'comment_004',
          author: 'Pop Culture Fan',
          text: 'The humor is clever and the message lands perfectly!',
          timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
        },
        {
          id: 'comment_005',
          author: 'Comedy Lover',
          text: 'Best movie of the summer. Margot Robbie is perfection.',
          timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
        }
      ],
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    },
    {
      id: 'post_003',
      serverId: 'ap-south-1',
      title: 'Killers of the Flower Moon - A Powerful Western',
      genre: 'Drama',
      body: 'Martin Scorsese\'s Killers of the Flower Moon is a sweeping, ambitious film that tackles a difficult and important chapter in American history. The story of the Osage murders is told with Scorsese\'s characteristic detail and depth.\n\nLeonardo DiCaprio and Robert De Niro both deliver career-best performances. The cinematography is breathtaking, capturing both the beauty and brutality of 1920s Oklahoma. This is essential cinema that refuses to look away from uncomfortable truths.',
      rating: 9,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23654321" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="40" fill="white" text-anchor="middle" dy=".3em"%3EKillers of the Flower Moon%3C/text%3E%3C/svg%3E',
      adminId: 'admin_asia',
      adminServer: 'ap-south-1',
      likes: 267,
      dislikes: 15,
      comments: [
        {
          id: 'comment_006',
          author: 'Western Fan',
          text: 'Scorsese masterpiece. DiCaprio was incredible.',
          timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
        },
        {
          id: 'comment_007',
          author: 'History Buff',
          text: 'Finally a film that tells this important story properly.',
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
        },
        {
          id: 'comment_008',
          author: 'Movie Critic',
          text: 'One of Scorsese\'s finest works. Absolutely riveting.',
          timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
        }
      ],
      createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
    },
    {
      id: 'post_004',
      serverId: 'us-west-2',
      title: 'Dune: Part Two - Epic Science Fiction Filmmaking',
      genre: 'Sci-Fi',
      body: 'Denis Villeneuve continues to deliver stunning science fiction with Dune: Part Two. The scale and ambition of this film are breathtaking. The visuals are absolutely spectacular, with every frame feeling like a painting.\n\nTimothée Chalamet brings depth to Paul Atreides, and Zendaya\'s screen time is used effectively. The action sequences are phenomenal, and the sound design is immersive. This is filmmaking at its finest - intelligent, beautiful, and thoroughly engaging.',
      rating: 8.5,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23FF8C00" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="40" fill="white" text-anchor="middle" dy=".3em"%3EDune Part Two%3C/text%3E%3C/svg%3E',
      adminId: 'movie_critic',
      adminServer: 'us-west-2',
      likes: 512,
      dislikes: 23,
      comments: [
        {
          id: 'comment_009',
          author: 'Sci-Fi Enthusiast',
          text: 'Villeneuve is a visionary. This is epic filmmaking.',
          timestamp: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
        },
        {
          id: 'comment_010',
          author: 'Space Opera Fan',
          text: 'The desert scenes are absolutely stunning!',
          timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
        },
        {
          id: 'comment_011',
          author: 'Visual Effects Lover',
          text: 'The cinematography is Oscar-worthy.',
          timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
        },
        {
          id: 'comment_012',
          author: 'Frank Herbert Fan',
          text: 'Finally, a proper adaptation of Dune!',
          timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
        }
      ],
      createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)
    }
  ]
};

// Global state
let currentUser = null;
let currentServer = null;
let allPosts = [...mockDatabase.posts];
let filteredPosts = [...mockDatabase.posts];
let currentDetailPost = null;

// ════════════════════════════════════════════════════════════════
// INITIALIZATION
// ════════════════════════════════════════════════════════════════

function init() {
  initializeFilmstrip();
  populateServers();
  loadUser();
  renderPosts();
}

function initializeFilmstrip() {
  const topSprockets = document.getElementById('topSprockets');
  const botSprockets = document.getElementById('botSprockets');
  const framesTrack = document.getElementById('framesTrack');

  // Create sprocket holes
  for (let i = 0; i < 25; i++) {
    topSprockets.appendChild(document.createElement('div')).className = 'sprocket-hole';
    botSprockets.appendChild(document.createElement('div')).className = 'sprocket-hole';
  }

  // Create film frames
  const frames = ['🎬', '🎥', '📽️', '🎞️'];
  for (let i = 0; i < 20; i++) {
    const frame = document.createElement('div');
    frame.className = 'film-frame';
    frame.textContent = frames[i % frames.length];
    framesTrack.appendChild(frame);
  }
  for (let i = 0; i < 20; i++) {
    const frame = document.createElement('div');
    frame.className = 'film-frame';
    frame.textContent = frames[i % frames.length];
    framesTrack.appendChild(frame);
  }
}

function populateServers() {
  const serverSelect = document.getElementById('serverSelect');
  mockDatabase.servers.forEach(server => {
    const option = document.createElement('option');
    option.value = server.id;
    option.textContent = `${server.name} (${server.region})`;
    serverSelect.appendChild(option);
  });
}

// ════════════════════════════════════════════════════════════════
// USER AUTHENTICATION
// ════════════════════════════════════════════════════════════════

function handleAdminBtn() {
  document.getElementById('loginModal').classList.add('open');
}

function closeLogin() {
  document.getElementById('loginModal').classList.remove('open');
  document.getElementById('loginError').style.display = 'none';
}

function doLogin() {
  const serverId = document.getElementById('serverSelect').value;
  const adminId = document.getElementById('adminId').value.trim();
  const password = document.getElementById('adminPassword').value.trim();

  if (!serverId) {
    showLoginError('Please select a server');
    return;
  }

  if (!adminId || !password) {
    showLoginError('Please enter admin ID and password');
    return;
  }

  // Validate credentials
  if (mockDatabase.admins[serverId] && mockDatabase.admins[serverId][adminId] === password) {
    currentUser = { adminId, server: serverId, loginTime: new Date() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
    closeLogin();
    updateAuthUI();
    renderPosts();
  } else {
    showLoginError('Invalid admin ID or password');
  }
}

function showLoginError(message) {
  const error = document.getElementById('loginError');
  error.textContent = message;
  error.style.display = 'block';
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem(STORAGE_KEY);
  updateAuthUI();
  closeNewPost();
  renderPosts();
}

function loadUser() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    currentUser = JSON.parse(stored);
    updateAuthUI();
  }
}

function updateAuthUI() {
  const adminBtn = document.getElementById('adminBtn');
  const userInfo = document.getElementById('userInfo');
  const newPostBtn = document.getElementById('newPostBtn');

  if (currentUser) {
    adminBtn.style.display = 'none';
    userInfo.classList.add('visible');
    newPostBtn.classList.add('visible');
    document.getElementById('usernameDisplay').textContent = currentUser.adminId;
  } else {
    adminBtn.style.display = 'block';
    userInfo.classList.remove('visible');
    newPostBtn.classList.remove('visible');
  }
}

// ════════════════════════════════════════════════════════════════
// POST MANAGEMENT
// ════════════════════════════════════════════════════════════════

function openNewPost() {
  if (!currentUser) {
    alert('You must be logged in to create posts');
    return;
  }
  document.getElementById('newPostModal').classList.add('open');
  resetPostForm();
}

function closeNewPost() {
  document.getElementById('newPostModal').classList.remove('open');
}

function resetPostForm() {
  document.getElementById('postTitle').value = '';
  document.getElementById('postGenre').value = 'Drama';
  document.getElementById('postBody').value = '';
  document.getElementById('postRating').value = 5;
  document.getElementById('ratingDisplay').textContent = '5';
  document.getElementById('postImage').value = '';
  document.getElementById('photoPreview').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  const ratingSlider = document.getElementById('postRating');
  if (ratingSlider) {
    ratingSlider.addEventListener('input', function() {
      document.getElementById('ratingDisplay').textContent = this.value;
    });
  }

  const photoInput = document.getElementById('postImage');
  if (photoInput) {
    photoInput.addEventListener('change', function(e) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const preview = document.getElementById('photoPreview');
        preview.src = event.target.result;
        preview.style.display = 'block';
      };
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }
    });
  }
});

function submitPost() {
  if (!currentUser) {
    alert('You must be logged in to post');
    return;
  }

  const title = document.getElementById('postTitle').value.trim();
  const genre = document.getElementById('postGenre').value;
  const body = document.getElementById('postBody').value.trim();
  const rating = parseFloat(document.getElementById('postRating').value);
  const imagePreview = document.getElementById('photoPreview');
  const image = imagePreview.style.display !== 'none' ? imagePreview.src : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="40" fill="white" text-anchor="middle" dy=".3em"%3E' + title + '%3C/text%3E%3C/svg%3E';

  if (!title || !body) {
    alert('Please fill in title and review');
    return;
  }

  const newPost = {
    id: 'post_' + Date.now(),
    serverId: currentUser.server,
    title,
    genre,
    body,
    rating,
    image,
    adminId: currentUser.adminId,
    adminServer: currentUser.server,
    likes: 0,
    dislikes: 0,
    comments: [],
    createdAt: new Date()
  };

  allPosts.unshift(newPost);
  filteredPosts = [...allPosts];
  renderPosts();
  closeNewPost();
  alert('Review published successfully!');
}

// ════════════════════════════════════════════════════════════════
// FILTERING & SEARCH
// ════════════════════════════════════════════════════════════════

function showAll() {
  filteredPosts = [...allPosts];
  renderPosts();
}

function filterGenre(genre) {
  filteredPosts = allPosts.filter(post => post.genre === genre);
  renderPosts();
}

function handleSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  if (!query) {
    filteredPosts = [...allPosts];
  } else {
    filteredPosts = allPosts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.body.toLowerCase().includes(query)
    );
  }
  renderPosts();
}

// ════════════════════════════════════════════════════════════════
// RENDERING
// ════════════════════════════════════════════════════════════════

function renderPosts() {
  const container = document.getElementById('postsContainer');
  const noResults = document.getElementById('noResults');

  if (filteredPosts.length === 0) {
    container.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  container.innerHTML = '';

  // Render featured post (highest rated)
  if (filteredPosts.length > 0) {
    const featured = filteredPosts.reduce((prev, current) =>
      (prev.rating > current.rating) ? prev : current
    );

    const featuredHTML = `
      <div class="featured-post" onclick="openPostDetail('${featured.id}')">
        <div class="featured-img">
          <img src="${featured.image}" alt="${featured.title}" onerror="this.style.display='none'">
          <div class="featured-img-placeholder" style="display: ${featured.image ? 'none' : 'block'}">🎬</div>
          <div class="featured-badge ${currentUser && currentUser.adminId === featured.adminId ? 'admin' : ''}">
            ${featured.adminId ? featured.adminId.toUpperCase() : 'FEATURED'}
          </div>
        </div>
        <div class="featured-body">
          <div>
            <div class="genre-tag">${featured.genre}</div>
            <h2>${featured.title}</h2>
            <p class="post-excerpt">${featured.body.substring(0, 200)}...</p>
            <div class="post-meta">by @${featured.adminId} • ${formatDate(featured.createdAt)}</div>
          </div>
          <div class="rating-meter">
            <div class="rating-text-group">
              <span class="rating-label">RATING</span>
              <div style="display: flex; align-items: center; gap: 4px;">
                <span class="rating-value">${featured.rating}</span>
                <span class="rating-max">/10</span>
              </div>
            </div>
            <div style="flex: 1;"></div>
            <div style="display: flex; gap: 10px; align-items: center;">
              <span style="font-size: 0.8rem; color: var(--gray);">👍 ${featured.likes}</span>
              <span style="font-size: 0.8rem; color: var(--gray);">👎 ${featured.dislikes}</span>
              <span style="font-size: 0.8rem; color: var(--gray);">💬 ${featured.comments.length}</span>
            </div>
          </div>
          <div class="interaction-bar">
            <button class="react-btn" onclick="event.stopPropagation(); likePost('${featured.id}')">👍 Like</button>
            <button class="react-btn" onclick="event.stopPropagation(); dislikePost('${featured.id}')">👎 Dislike</button>
            <button class="comment-count-btn" onclick="event.stopPropagation(); openPostDetail('${featured.id}')">${featured.comments.length} Comments</button>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += featuredHTML;
  }

  // Render remaining posts as grid
  const otherPosts = filteredPosts.filter(p => p !== featured);

  if (otherPosts.length > 0) {
    let gridHTML = '<div class="posts-grid">';

    otherPosts.forEach(post => {
      gridHTML += `
        <div class="post-card" onclick="openPostDetail('${post.id}')">
          <div class="card-img">
            <img src="${post.image}" alt="${post.title}" onerror="this.style.display='none'">
            <div class="featured-img-placeholder" style="display: ${post.image ? 'none' : 'block'}">🎬</div>
          </div>
          <div class="card-body">
            <h3 class="card-title">${post.title}</h3>
            <p class="card-excerpt">${post.body}</p>
            <div class="card-footer">
              <div class="card-date">${formatDate(post.createdAt)}</div>
              ${currentUser && currentUser.adminId === post.adminId ? '<div class="card-admin-badge">ADMIN</div>' : ''}
            </div>
            <div class="card-interactions">
              <div class="mini-rating">
                <span class="mini-rating-val">⭐${post.rating}</span>
              </div>
              <span>👍 ${post.likes}</span>
              <span>👎 ${post.dislikes}</span>
              <span>💬 ${post.comments.length}</span>
            </div>
          </div>
        </div>
      `;
    });

    gridHTML += '</div>';
    container.innerHTML += gridHTML;
  }
}

function likePost(postId) {
  const post = allPosts.find(p => p.id === postId);
  if (post) {
    post.likes++;
    renderPosts();
  }
}

function dislikePost(postId) {
  const post = allPosts.find(p => p.id === postId);
  if (post) {
    post.dislikes++;
    renderPosts();
  }
}

// ════════════════════════════════════════════════════════════════
// POST DETAIL MODAL
// ════════════════════════════════════════════════════════════════

function openPostDetail(postId) {
  const post = allPosts.find(p => p.id === postId);
  if (!post) return;

  currentDetailPost = post;

  // Set post details
  document.getElementById('detailImg').src = post.image;
  document.getElementById('detailGenre').textContent = post.genre;
  document.getElementById('detailTitle').textContent = post.title;
  document.getElementById('detailMeta').textContent = `by @${post.adminId} from ${getServerName(post.adminServer)} • ${formatDate(post.createdAt)}`;
  document.getElementById('detailBody').textContent = post.body;
  document.getElementById('detailRating').textContent = post.rating;

  // Render interaction buttons
  const interactionBar = document.getElementById('interactionBar');
  interactionBar.innerHTML = `
    <button class="react-btn" onclick="likePost('${post.id}'); renderComments();">👍 Like (${post.likes})</button>
    <button class="react-btn" onclick="dislikePost('${post.id}'); renderComments();">👎 Dislike (${post.dislikes})</button>
  `;

  // Render edit/delete buttons if admin owns post
  const detailActions = document.getElementById('detailActions');
  if (currentUser && currentUser.adminId === post.adminId) {
    detailActions.innerHTML = `
      <button class="btn-detail-action" onclick="editPost('${postId}')">Edit Review</button>
      <button class="btn-detail-delete" onclick="deletePost('${postId}')">Delete Review</button>
    `;
  } else {
    detailActions.innerHTML = '';
  }

  // Render comments
  renderComments();

  // Open modal
  document.getElementById('postDetailModal').classList.add('open');
}

function closePostDetail() {
  document.getElementById('postDetailModal').classList.remove('open');
  currentDetailPost = null;
  document.getElementById('commentName').value = '';
  document.getElementById('commentText').value = '';
}

function renderComments() {
  if (!currentDetailPost) return;

  const commentList = document.getElementById('commentList');
  const post = currentDetailPost;

  if (post.comments.length === 0) {
    commentList.innerHTML = '<div class="no-comments">No comments yet. Be the first to comment!</div>';
    return;
  }

  commentList.innerHTML = post.comments.map(comment => `
    <div class="comment-item">
      <div class="comment-author">@${comment.author}</div>
      <div class="comment-text">${comment.text}</div>
      <small style="color: var(--gray); font-size: 0.7rem; margin-top: 4px; display: block;">
        ${formatDate(comment.timestamp)}
      </small>
    </div>
  `).join('');
}

function submitComment() {
  if (!currentDetailPost) return;

  const name = document.getElementById('commentName').value.trim();
  const text = document.getElementById('commentText').value.trim();

  if (!name || !text) {
    alert('Please enter your name and comment');
    return;
  }

  const newComment = {
    id: 'comment_' + Date.now(),
    author: name,
    text,
    timestamp: new Date()
  };

  currentDetailPost.comments.push(newComment);
  document.getElementById('commentName').value = '';
  document.getElementById('commentText').value = '';
  renderComments();
}

function editPost(postId) {
  alert('Edit functionality coming soon!');
}

function deletePost(postId) {
  if (!currentUser) return;

  if (confirm('Are you sure you want to delete this review?')) {
    const index = allPosts.findIndex(p => p.id === postId);
    if (index > -1) {
      allPosts.splice(index, 1);
      filteredPosts = [...allPosts];
      closePostDetail();
      renderPosts();
      alert('Review deleted successfully');
    }
  }
}

// ════════════════════════════════════════════════════════════════
// UTILITIES
// ════════════════════════════════════════════════════════════════

function formatDate(date) {
  const d = new Date(date);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function getServerName(serverId) {
  const server = mockDatabase.servers.find(s => s.id === serverId);
  return server ? server.name : 'Unknown Server';
}

// ════════════════════════════════════════════════════════════════
// START APPLICATION
// ════════════════════════════════════════════════════════════════

window.addEventListener('DOMContentLoaded', init);
