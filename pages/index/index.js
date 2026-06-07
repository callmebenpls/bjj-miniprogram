const { categories, courses } = require('../../data/courses');

// Coach portrait photos (local, no domain whitelist needed)
const COACH_AVATARS = {
  'John Danaher': '/images/coaches/danaher.jpg',
  'Gordon Ryan': '/images/coaches/gordon.jpg',
  'Mikey Musumeci': '/images/coaches/mikey.jpg',
  'Craig Jones': '/images/coaches/craig.jpg',
  'Lachlan Giles': '/images/coaches/lachlan.jpg'
};

// Build coach list with initials, photos and counts
function buildCoachList() {
  const map = {};
  courses.forEach(c => {
    if (!map[c.instructor]) map[c.instructor] = [];
    map[c.instructor].push(c);
  });
  return Object.keys(map).map(name => {
    const parts = name.split(' ');
    return {
      name,
      initial: parts.map(w => w[0]).join(''),
      avatar: COACH_AVATARS[name] || '',
      lastName: parts[parts.length - 1],
      count: map[name].length
    };
  }).sort((a, b) => a.lastName.localeCompare(b.lastName));
}

const allCourses = courses;
const coachList = buildCoachList();

Page({
  data: {
    categories,
    coachList,
    allCourses,
    allCount: allCourses.length,
    filteredCourses: allCourses,
    curCat: 'all',
    curCoach: ''
  },

  onShareAppMessage() {
    return {
      title: '巴柔之家合集 · 顶尖教练系统教程',
      path: '/pages/index/index'
    };
  },

  onLoad() {
    this.doFilter();
  },

  onSearch(e) {
    const q = e.detail.value.toLowerCase().trim();
    if (!q) {
      this.doFilter();
      return;
    }
    const filtered = allCourses.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.titleCn.toLowerCase().includes(q) ||
      c.instructor.toLowerCase().includes(q) ||
      c.cat.includes(q)
    );
    this.setData({ filteredCourses: filtered });
  },

  setCat(e) {
    const cat = e.currentTarget.dataset.cat;
    this.data.curCat = cat;
    this.doFilter();
  },

  setCoach(e) {
    const name = e.currentTarget.dataset.name;
    this.data.curCoach = this.data.curCoach === name ? '' : name;
    this.doFilter();
  },

  doFilter() {
    let filtered = allCourses;
    if (this.data.curCat !== 'all') {
      filtered = filtered.filter(c => c.cat === this.data.curCat);
    }
    if (this.data.curCoach) {
      filtered = filtered.filter(c => c.instructor === this.data.curCoach);
    }
    this.setData({
      filteredCourses: filtered,
      curCat: this.data.curCat,
      curCoach: this.data.curCoach
    });
  },

  openDetail(e) {
    const id = e.currentTarget.dataset.id;
    const course = allCourses.find(c => c.id === id);
    if (!course) return;
    wx.navigateTo({
      url: '/pkgDetail/detail/detail?id=' + id
    });
  }
});
