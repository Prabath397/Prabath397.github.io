import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolveDataDir() {
  const localDir = path.resolve(__dirname, '../../data');
  if (fs.existsSync(localDir)) {
    return localDir;
  }
  const cwdDir = path.resolve(process.cwd(), 'server/data');
  if (fs.existsSync(cwdDir)) {
    return cwdDir;
  }
  return localDir;
}

let cachedContext = null;

/**
 * Loads all 7 portfolio JSON files and formats them into a clean string context for Gemini.
 */
export function getPortfolioContext() {
  if (cachedContext) {
    return cachedContext;
  }

  const dataDir = resolveDataDir();

  try {
    const profile = JSON.parse(fs.readFileSync(path.join(dataDir, 'profile.json'), 'utf8'));
    const projects = JSON.parse(fs.readFileSync(path.join(dataDir, 'projects.json'), 'utf8'));
    const skills = JSON.parse(fs.readFileSync(path.join(dataDir, 'skills.json'), 'utf8'));
    const experience = JSON.parse(fs.readFileSync(path.join(dataDir, 'experience.json'), 'utf8'));
    const education = JSON.parse(fs.readFileSync(path.join(dataDir, 'education.json'), 'utf8'));
    const certifications = JSON.parse(fs.readFileSync(path.join(dataDir, 'certifications.json'), 'utf8'));
    const contact = JSON.parse(fs.readFileSync(path.join(dataDir, 'contact.json'), 'utf8'));

    const fullKnowledge = {
      profile,
      projects,
      skills,
      experience,
      education,
      certifications,
      contact,
    };

    cachedContext = JSON.stringify(fullKnowledge, null, 2);
    return cachedContext;
  } catch (error) {
    console.error('[Knowledge Service] Error reading portfolio data files:', error);
    throw new Error('Failed to load portfolio knowledge base.');
  }
}

