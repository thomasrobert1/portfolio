from pathlib import Path
p = Path('index.html')
t = p.read_text(encoding='utf-8')
start = t.index('      <!-- Timeline chronologique (formation + expérience) -->')
end = t.index('  <!-- ═══════════════════════════════════════ PROJECTS', start)
head = t[:start]
foot = t[end:]
new_block = '''      <!-- Timeline chronologique (formation + expérience) -->
      <div class="timeline-panel active" id="tab-timeline">
        <div class="timeline-line"></div>

        <div class="timeline-item left fade-in">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-logo">
              <img src="https://img.icons8.com/fluency/96/school-building.png" alt="Lycée francais de Berlin logo">
            </div>
            <span class="timeline-date">2016 — 2021</span>
            <h3 class="timeline-title" data-i18n="edu4Title">Lycée francais de Berlin</h3>
            <p class="timeline-org">Berlin, Allemagne</p>
            <p class="timeline-desc" data-i18n="edu4Desc">
              Immersion totale en Allemagne, appropriation rapide de la langue et culture allemande. Formation solide en sciences et mathématiques, avec un accent sur les langues vivantes.
            </p>
            <div class="timeline-tags">
              <span>Immersion</span><span>Club d'échecs</span><span>Cours intensifs d'allemand</span><span>Voyage et découverte du pays</span>
            </div>
          </div>
        </div>

        <div class="timeline-item right fade-in delay-1">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-logo">
              <img src="https://img.icons8.com/fluency/96/graduation-cap.png" alt="Baccalauréat logo">
            </div>
            <span class="timeline-date">2021-2023</span>
            <h3 class="timeline-title" data-i18n="edu3Title">Baccalauréat Général</h3>
            <p class="timeline-org">Lycée Saint-Éloi, Aix-en-Provence</p>
            <p class="timeline-desc" data-i18n="edu3Desc">
              Mention Très Bien, spécialité Mathématiques et Physique-Chimie, option Maths Expertes.
            </p>
            <div class="timeline-tags">
              <span>Mention TB</span><span>Internat</span>
            </div>
          </div>
        </div>

        <div class="timeline-item left fade-in delay-2">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-logo">
              <img src="https://img.icons8.com/fluency/96/briefcase.png" alt="Travail d'été logo">
            </div>
            <span class="timeline-date" data-i18n="exp1Date">Été 2023 · 2 mois</span>
            <h3 class="timeline-title" data-i18n="exp1Title">Travail d'été</h3>
            <p class="timeline-org">Aux Maraîchers Provence — Fréjus, France</p>
            <p class="timeline-desc" data-i18n="exp1Desc">
              Travail d'été en tant qu'ouvrier agricole dans une exploitation maraîchère. Expérience enrichissante de travail manuel, gestion d'équipe et respect des normes de sécurité.
            </p>
            <div class="timeline-tags">
              <span>Travail manuel</span><span>Gestion d'équipe</span><span>Sécurité</span>
            </div>
          </div>
        </div>

        <div class="timeline-item right fade-in delay-1">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-logo">
              <img src="https://img.icons8.com/emoji/96/carrot-emoji.png" alt="Carotte cartoon logo">
            </div>
            <span class="timeline-date">2023 — 2024 · Bénévolat</span>
            <h3 class="timeline-title">Président de l'association Strass Fermière</h3>
            <p class="timeline-org">Association Strass Fermière</p>
            <p class="timeline-desc">
              Coordination des actions bénévoles, organisation d'événements, communication et pilotage des projets agricoles et sociaux.
            </p>
            <div class="timeline-tags">
              <span>Leadership</span><span>Organisation</span><span>Communication</span>
            </div>
          </div>
        </div>

        <div class="timeline-item left fade-in">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-logo">
              <img src="https://img.icons8.com/fluency/96/college-student.png" alt="Classes préparatoires logo">
            </div>
            <span class="timeline-date">2023 — 2025</span>
            <h3 class="timeline-title" data-i18n="edu2Title">Classes Préparatoires MPSI/PSI</h3>
            <p class="timeline-org">Lycée Aux Lazaristes, Lyon, France</p>
            <p class="timeline-desc" data-i18n="edu2Desc">
              Formation intensive en mathématiques, physique et sciences de l'ingénieur. Admis en école d'ingénieur via concours national.
            </p>
            <div class="timeline-tags">
              <span>Mathématiques</span><span>Physique-Chimie</span><span>Sciences de l'ingénieur</span><span>Anglais/Allemand</span>
            </div>
          </div>
        </div>

        <div class="timeline-item right fade-in delay-1">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-logo">
              <img src="https://img.icons8.com/fluency/96/university.png" alt="ENSAM logo">
            </div>
            <span class="timeline-date">2025 — Present</span>
            <h3 class="timeline-title" data-i18n="edu1Title">Diplôme d'Ingénieur PGE</h3>
            <p class="timeline-org">Arts-et-Métiers (ENSAM), Châlons-en-Champagne, France</p>
            <p class="timeline-desc" data-i18n="edu1Desc">
              Programme Grande École (PGE) en 3 ans, spécialisation en mécanique et systèmes complexes.
            </p>
            <div class="timeline-tags">
              <span>Mécanique des solides</span><span>Mécanique des fluides</span><span>Maths appli.</span><span>Procédés industriels</span><span>Matériaux</span>
            </div>
          </div>
        </div>
      </div>'''
p.write_text(head + new_block + foot, encoding='utf-8')
print('ok')