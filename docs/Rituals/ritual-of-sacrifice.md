---
sidebar_label: "Ritual of Sacrifice"
---

# Ritual of Sacrifice

### Design Goals

![](https://i.imgur.com/7dyQawz.png)

### Ideals

- **Fair Compensation**: Reward contributors who are working on a given project in proportion to the quality and volume of their contribution
- **Ease of Play**: The process should be simple and fluid, without much distraction to workers or the lead managing the project.
- **Visible Transactions**: Create permanent records of all contributions that are kept on chain and on IPFS
- **Work Rituals**: Create a social ritual around our work that is daily but non-invasive. It should be conducive to Deep Work (Read Deep Work by Cal Newport if you are not familiar with the concept)
- **Loose Coupling**: Each project should be modular, and does not interfere with the allocation and proportions of the main DAOMasons DAO until the project is complete.

### Key Definitions

- **Project DAO:** The DAO that we spun up for a particular project
- **Main DAO:** The main Masons DAO that we use for our main treasury, voting decision etc.
- **Core Member:** Has shares in the main DAO. Has signed the share letter of understanding. Is responsible for DAO governance, quality control of projects and services rendered, and likely some sort of domain within the DAO. Makes regular contributions to DAO Masons.
- **Contractor:** Has loot in the main DAO. This role is flexible. Does not require regular work within DAO Masons. Is not responsible for governance or quality control.
- **Project Lead:** Every project should have a lead. This lead is responsible for QC, daily check ins, managing the KanBan, setting priorities and scope, and making sure that the shares minted in the project are fair.
  - A team or project lead **must be a core member of DAO Masons**.
  - There can be more than one Project or Team Lead per project.
  - If there is a split of authority, it should be minimal (2 leads) and should each lead should choose a domain of work (ex. product management/vision and quality control vs. Project management, admin, 'HR')
  - A core member should not be a lead for more than one project. Perhaps in exteme cases we could make an exception.
- **Internal Project:** Project that is for building or maintaining DAOMasons. This project is funded either by Masons shares or funds from the Main DAO's treasury
- **External Project:** A project for an external client. Funds come in the form of liquid tokens from outside the DAO. This is usually for a service rendered.
- **Account Manager:** For large external projects, there may be a contributor who is reponsible for managing finances and dealing directly with the client.
- **Project Treasury:** This could be the Project DAO's treasury (most cases), or a project DAO's external safe (in cases where the client has paid in advance)

### The Gist

- For every major project at DAOMasons, in both internal work for the DAO and external work for clients, we summon a DAO.
- We have a daily meeting where we mint shares scored in proportion to the amount of work (time) contributed using a check in shaman
- We write a list of tasks that we need to complete and create a Kanban board for these tasks. This board can evolve and change over time, but every project should have a 'win state' or an expicitly stated point where the group agrees that the project is completed.
- Once the project is won, and the work is complete, if the project was internal (DAO Masons scoped), we reward contributors shares in the main DAO in proportion to the shares awarded in the Project DAO.
- If the project is external (work for hire), we divide the tokens paid for the work up in proportion to the shares recorded in the project DAO. A DAO Mason's rake of the liquid tokens are sent to the main DAO before dividing the rest to contributors.
- External project may also award shares, this must be explicitly stated before the project starts (and likely voted on).
- Internal projects may also award liquid tokens from the DAO treasury, by nature of the code this will require a DAO vote before the project begins.

## Game Rules (How it works)

### Project Start

- The Main DAO votes to start a new project.
- Project lead creates a team
- Project lead summons a new DAO
- If the project requires a budget from the Main DAO treasury, then the Main DAO votes to send funds to a Project Treasury
- If the project receives funding from an external source, then the budget for that project is sent to a Project Treasury.
  - It's likely that the client will not pay all the project's funds up front.
  - We recommend that the Team Lead or account manager sets up a smart invoice between the client and the Project Treasury
- If the project is internal, we decide beforehand what the ratio of Main DAO shares are awarded to the project DAO.
  - Ideally this will be 1:1
  - However, if the project is receiving funds from the DAO treasury, or if it's of lesser or greater importance, then DAO masons can decide on a different ratio.
- If the project has a paying client, we send them any documents that are relevant to the agreement they are making. Smart Invoice allows the signers to post the agreement docs to .
- If the project is external, the team should try to provide pay estimates for each contributor based on hours worked and the total budget for the project.
  - We should acknowledge in advance that this is an estimate
  - Each team member is responsible for giving a reasonable estimate of how long their work will take.
  - Also, if there are contributors whose skills are objectively worth more than others, then the team lead (and team) decides on how much more that amt is worth and decided on a **Bonus**
  - That off-rate contributor multiplies their amt claimed by that ratio.
  - This can also be done in reverse for contributors whose work is valued less
- Once the DAO approves the project, then the Team Lead works with the team to create a project KanBan for all the tasks involved.
- The Team and Team Lead decides on the scope and when the project is completed.

### Daily Ritual

- Every day (perhaps excluding weekends), the team meets up and allocates shares for the day's work
- Work that is being claimed should be within the project scope. The Project lead can choose to make exceptions as they arise.
- Contributors should check with the lead if they choose to work off-scope
- Ideally, this meeting happens **after the work is done**
- Therefore the meeting should be late in the day. This is good for many reasons for this:
  - Transparency: Each worker on the project gets to see what is allocated
  - Deep Work: The mind is clear at the beginning of the day and unsoiled by meetings
  - Discussion: Allows for a bit of time to unwind at the end of the day and have light discussion if time permits
- **Components of a claim**
  - Every ritual, a contributor creates a claim
  - A claim should include the contributor's state (how they feel), a description of the work completed, how much they worked, how much they plan on claiming, a description of what they plan on doing tomorrow.
- **Components of a meeting**
  - Every meeting, each member quickly verbalizes their claim
  - We invite, kind, gentle scrutiny from members if they are concerned about members over-allocating to themselves.
  - If there are no disagreements, they each send a claim using the CheckIn minion's interface.
  - Once this is done, the team discusses whatever they please
- Meetings should be short and should finish accomplish the main goals above before shooting the shit
- We should not allocate shares for shooting the shit, however shooting the shit for some time is recommended on occasion.
- The team lead is resposible for making sure the meeting is orderly and does not go off the rails.
- It is possible that every member cannot meet the daily check ins. This can be because of scheduling issues, time-zone issues, or that they're working on multiple projects
- Once the meeting is over, the team lead quickly reviews the claims and makes sure that the amount claimed is what was stated during the meeting

### Project Close

- The team lead is responsible for deciding when the project is finished.
- They are also responsible for quality control and making sure that the project fits DAO Masons standards.
- Once the project is finished, the Team Lead delivers the project to the client or DAO Masons
- If the project is external
  - Project lead collects signs the Smart Invoice or collects the funds through other means
  - They allocate the DAO Mason's rate to the Main DAO's treasury (TBD)
    - We need to write another mechanic for this, but a % will go to rewarding shareholders for previous work, and another % goes to the DAO treasury.
    - We also need to decide if we reward members in shares(core members) or loot (contractors) for work completed.
  - If they are using an external safe, they transfer the funds to the project's main treasury
  - Every member rage quits their share of the project rewards
- If the project is internal, the team lead makes a request of total shares to the DAO. The Main DAO uses the mintShares() function to mint shares in proportion the shares awarded in the project DAO (X the ratio).
- DAO Masons mints NFTs for contributors to commemorate their contributions and provide a 'Proof of Skill'
- DAO Masons follows up with the client two weeks later to gather satisfaction

### Dispute Resolution

- If a contributor does not agree with another contributor's claim, they can either discuss it publically, or bring it up to the Team Lead
- If a contributor does not agree with a Team Lead's decision, they can escalate the issue to the Main DAO. The DAO can choose a member to arbitrate the disagreement.
- If no agreement can be made at this point, then the DAO can choose to bring in more abitrators or it can put to a DAO vote.
- **Firing:** A team lead can fire a contributor on a project. However, they should be sure that this is a decision their team wants and should get second opinions from other team members. Firing should be reserved for contributors who:
  - Are not acting in good faith
  - Are claiming different amounts than the amount they stated during the meeting
  - Are disruptive and preventing the project from being completed
  - Are repeatedly turning sub-par work and failing to correct course after explicit warnings
  - Are not making progress on their work
  - Are not responsive
  - Are abusive to anyone else on the team and they don't correct their behaviour after warnings (this does not include gentle, good-faith scrutiny of work or supportive criticism as that is a key function of quality control)
- A firing should be relatively obvious and the team lead should get other opinions from other members of the Main DAO before doing so
- Fired contributors no longer work on the project.
- Fired contributors still may choose to escalate the dispute to DAO masons.
- **Mutiny:** A project DAO (using their project DAO shares) can vote to replace their Project Lead or simply flag their Project Lead to correct their behavior. DAO Masons is responsible for electing or delegating a new project Lead or arbitrating a disagreement with the team and the team lead.
- The Main DAO vote has final say in all matters.
- During all discussions and arbitrations, every contributor (both contractors and core members) are responsible for having honest, good-faith debates on the issue at hand.
- DAO Masons arbitrators are reponsible for acting quickly to prevent any disputes from escalating needlessly.
