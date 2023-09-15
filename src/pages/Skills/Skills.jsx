import "./Skills.css";
// import "src/pages/About/About.css";

const Skills = () => {
  return (
    <main className="skillsMain">
      <div className="titleContainer">
        <h1 className="headerH">EXPERTISE</h1>
        <h2 className="header2H">My Skills</h2>
      </div>

      <div class="dashboard">
        <div className="tag">
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-1" cx="57" cy="57" r="52" />
          </svg>
          <span className="skillsName">HTML</span>
        </div>

        <div className="tag">
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-2" cx="57" cy="57" r="52" />
          </svg>
          <span className="skillsName">CSS</span>
        </div>

        <div className="tag">
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-3" cx="57" cy="57" r="52" />
          </svg>
          <span className="skillsName">JavaScript</span>
        </div>

        <div className="tag">
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-4" cx="57" cy="57" r="52" />
          </svg>
          <span className="skillsName">React.js</span>
        </div>

        <div className="tag">
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-5" cx="57" cy="57" r="52" />
          </svg>
          <span className="skillsName">Node.js</span>
        </div>

        <div className="tag">
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-6" cx="57" cy="57" r="52" />
          </svg>
          <span className="skillsName">Tailwind CSS</span>
        </div>

        <div className="tag">
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-7" cx="57" cy="57" r="52" />
          </svg>
          <span className="skillsName">Jest</span>
        </div>

        <div className="tag">
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-8" cx="57" cy="57" r="52" />
          </svg>
          <span className="skillsName">GitHub</span>
        </div>

        <div className="tag">
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-9" cx="57" cy="57" r="52" />
          </svg>
          <span className="skillsName">Python</span>
        </div>

        <div className="tag">
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-10" cx="57" cy="57" r="52" />
          </svg>
          <span className="skillsName">Express.js</span>
        </div>

        <div className="tag">
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-11" cx="57" cy="57" r="52" />
          </svg>
          <span className="skillsName">Next.js</span>
        </div>

        <div className="tag">
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-12" cx="57" cy="57" r="52" />
          </svg>
          <span className="skillsName">PostgreSQL</span>
        </div>
      </div>

      <div className="softSkillsS">
        <p className="softSkill">Team work</p>
        <p className="softSkill">Critical Thinking</p>
        <p className="softSkill">Problem Solving</p>
        <p className="softSkillLast">Creativity</p>
      </div>
      <div className="softSkillsS">
        <p className="softSkill">Presentation</p>
        <p className="softSkill">Active Listening</p>
        <p className="softSkill">Effective Communication</p>
        <p className="softSkillLast">Time Management</p>
      </div>
    </main>
  );
};
export default Skills;
