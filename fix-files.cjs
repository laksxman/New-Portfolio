const fs = require('fs');

const fixes = [
  { file: 'src/components/Navbar.jsx', insertBefore: '    </motion.nav>', insertText: '    </div>' },
  { file: 'src/components/About.jsx', insertBefore: '    </section>', insertText: '    </div>' },
  { file: 'src/components/Social.jsx', insertBefore: '    </section>', insertText: '    </div>' },
  { file: 'src/components/Footer.jsx', insertBefore: '    </footer>', insertText: '    </div>' },
];

fixes.forEach(({ file, insertBefore, insertText }) => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes(insertText)) {
    content = content.replace(insertBefore, insertText + '\n' + insertBefore);
    fs.writeFileSync(file, content);
    console.log('Fixed:', file);
  } else {
    console.log('Already fixed:', file);
  }
});

// Fix Projects.jsx - missing </div> for the p-6 div
let projects = fs.readFileSync('src/components/Projects.jsx', 'utf8');
// Find the closing motion.div that should have a </div> before it for the p-6 container
if (!projects.includes('                </div>\n              </motion.div>')) {
  projects = projects.replace('              </motion.div>', '                </div>\n              </motion.div>');
  fs.writeFileSync('src/components/Projects.jsx', projects);
  console.log('Fixed: src/components/Projects.jsx');
} else {
  console.log('Already fixed: src/components/Projects.jsx');
}
