import { qs } from './util';

let jobs = [
  {
    id: 1,
    company: 'Astha IT',
    role: 'Full Stack Developer',
    type: 'Remote',
    isfulltime: true,
    price: '$130,000 - $150,000',
    status: 'NOT APPLIED',
    short_description:
      'Develop secure and scalable full stack web applications.',
  },
  {
    id: 2,
    company: 'Brain Station 23',
    role: 'Frontend Developer',
    type: 'Remote',
    isfulltime: true,
    price: '$90,000 - $110,000',
    status: 'INTERVIEW',
    short_description: 'Build responsive UI using React and Tailwind CSS.',
  },
  {
    id: 3,
    company: 'Enosis Solutions',
    role: 'Backend Developer',
    type: 'Remote',
    isfulltime: true,
    price: '$100,000 - $120,000',
    status: 'REJECTED',
    short_description: 'Create REST APIs using Node.js and PostgreSQL.',
  },
  {
    id: 4,
    company: 'Tiger IT',
    role: 'Laravel Developer',
    type: 'Part-time',
    isfulltime: false,
    price: '$40/hr',
    status: 'NOT APPLIED',
    short_description: 'Maintain and develop backend systems using Laravel.',
  },
  {
    id: 5,
    company: 'Datasoft',
    role: 'React Developer',
    type: 'Remote',
    isfulltime: true,
    price: '$95,000 - $115,000',
    status: 'INTERVIEW',
    short_description: 'Develop reusable React components and manage state.',
  },
  {
    id: 6,
    company: 'Therap BD',
    role: 'Full Stack Engineer',
    type: 'Remote',
    isfulltime: true,
    price: '$120,000 - $140,000',
    status: 'NOT APPLIED',
    short_description: 'Work on scalable healthcare software solutions.',
  },
  {
    id: 7,
    company: 'REVE Systems',
    role: 'DevOps Engineer',
    type: 'Remote',
    isfulltime: true,
    price: '$100,000 - $130,000',
    status: 'REJECTED',
    short_description: 'Manage CI/CD pipelines and cloud infrastructure.',
  },
  {
    id: 8,
    company: 'Workspace Infotech',
    role: 'Next.js Developer',
    type: 'Part-time',
    isfulltime: false,
    price: '$50/hr',
    status: 'NOT APPLIED',
    short_description: 'Build SEO optimized web apps using Next.js.',
  },
  {
    id: 9,
    company: 'Kaz Software',
    role: 'Mobile App Developer',
    type: 'Remote',
    isfulltime: true,
    price: '$105,000 - $125,000',
    status: 'INTERVIEW',
    short_description: 'Develop cross-platform apps using React Native.',
  },
  {
    id: 10,
    company: 'BJIT',
    role: 'Software Engineer',
    type: 'Remote',
    isfulltime: true,
    price: '$110,000 - $135,000',
    status: 'NOT APPLIED',
    short_description: 'Work on enterprise-level software systems.',
  },
];
let tabsval = 'All';
// dashboard summery
function summery() {
  document.querySelector('#das_total').querySelector('h2').textContent =
    jobs.length;
  document.querySelector('#das_interview').querySelector('h2').textContent =
    jobs.filter(i => i.status === 'INTERVIEW').length;
  document.querySelector('#das_rejected').querySelector('h2').textContent =
    jobs.filter(i => i.status === 'REJECTED').length;
}

// result part
function result() {
  const availableJobs = document.querySelector('#available_jobs');

  availableJobs.textContent = (
    tabsval === 'All'
      ? jobs.length
      : tabsval === 'Interview'
        ? jobs.filter(i => i.status === 'INTERVIEW').length
        : jobs.filter(i => i.status === 'REJECTED').length
  )
    .toString()
    .concat(' ', 'jobs');
}
// tabs

// ========== card show ========

function cardshow() {
  const container = document.getElementById('jobs_con');
  container.innerHTML = '';
  const filteredjobs =
    tabsval == 'All'
      ? jobs
      : tabsval == 'Interview'
        ? jobs.filter(i => i.status === 'INTERVIEW')
        : jobs.filter(i => i.status === 'REJECTED');
  if (filteredjobs.length > 0) {
    filteredjobs.forEach(itm => {
      const dv = document.createElement('div');
      dv.className = 'p-6 space-y-5 bg-white rounded-lg stroke-1 stroke-stroke';
      dv.innerHTML = `<!-- introduct part -->
        <div class="flex justify-between items-center">
          <div class="space-y-2">
            <p class="subtitle text-black">${itm.company}</p>
            <p class="body1 text-gray">${itm.role}</p>
          </div>
          <button class="size-8 border-[1px]  border-stroke rounded-full flex justify-center items-center del">
            <img src="/delete.svg" alt="delete svg" class="size-4 text-gray">
          </button>
        </div>
        <!-- price part -->
        <p class="body2 text-gray">
          ${itm.type}
          •
          ${itm.isfulltime ? 'Full-time' : 'Part-time'}
          •
          ${itm.price}
        </p>
        <!-- applied button -->
        <button class="font-medium text-sm ${itm.status == 'NOT APPLIED' ? 'bg-[#EEF4FF]' : itm.status == 'INTERVIEW' ? 'bg-green text-white' : 'bg-red text-white'} rounded-sm p-3">${itm.status}</button>
        <p class="body2 text-dark-gray">${itm.short_description}</p>
        <!-- buttons int - rej -->
        <div class="flex items-center gap-2">
          <button
            class="border-2 border-green text-green font-semibold text-sm p-3 transition-colors duration-200 hover:bg-green hover:text-white inter">Interview</button>
          <button
            class="border-2 border-red text-red font-semibold text-sm p-3 transition-colors duration-200 hover:bg-red hover:text-white rej">Rejected</button>
        </div>`;
      dv.querySelector('.inter').addEventListener('click', function () {
        jobs = jobs.map(i => {
          if (i.id == itm.id) {
            return { ...i, status: 'INTERVIEW' };
          } else {
            return i;
          }
        });
        cardshow();
        summery();
        result();
      });
      dv.querySelector('.rej').addEventListener('click', function () {
        jobs = jobs.map(i => {
          if (i.id == itm.id) {
            return { ...i, status: 'REJECTED' };
          } else {
            return i;
          }
        });
        cardshow();
        summery();
        result();
      });
      dv.querySelector('.del').addEventListener('click', function () {
        jobs = jobs.filter(i => i.id != itm.id);
        cardshow();
        summery();
        result();
      });
      container.appendChild(dv);
    });
  } else {
    container.innerHTML = `<div
        class="w-full flex justify-center flex-col items-center min-h-[400px] rounded-lg bg-white border-[1px] border-stroke">

        <img src="/doc.png" alt="doc_icon" class="block">
        <p class="font-semibold text-2xl leading-8 text-black">No jobs available</p>
        <p class="text-[16px] text-gray">Check back soon for new job opportunities</p>

      </div>`;
  }
}

function tabsfun() {
  const tabsElements = document.querySelectorAll('.tab');

  // Tab click logic
  tabsElements.forEach(tab => {
    tab.addEventListener('click', function () {
      tabsElements.forEach(t => {
        t.className =
          'p-3 rounded-sm bg-white font-semibold text-sm text-gray stroke-1 stroke-[#F1F2F4] tab';
      });
      this.className =
        'p-3 rounded-sm bg-primary font-semibold text-sm text-white stroke-1 stroke-[#F1F2F4] tab';
      tabsval = this.textContent;
      result();
      cardshow();
    });
  });
}
const allfunc = [summery, result, tabsfun, cardshow];
document.addEventListener('DOMContentLoaded', function () {
  allfunc.forEach(i => i());
});
