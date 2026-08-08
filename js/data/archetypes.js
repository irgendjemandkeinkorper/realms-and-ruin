/* Six expedition roles. The setup question establishes the adventurer; the two
   sides show the choice between Righteous duty and Ruthless efficiency. */
const questions = {
  'black-gate':'Why did you accept the Black Gate contract when you knew the seal was dangerous?',
  'lost-cartographers':'Which missing cartographer did you promise to bring home, and why them?',
  'broken-ward':'What did you sacrifice to learn how the broken ward works?',
  'rival-expedition':'What does the rival company know about you that could make them hesitate?',
  'clockwork-heart':'What debt will the Heart’s countdown force you to pay before it reaches zero?',
  'below-the-below':'What did your shadow do at the eighth stair that you have not told the Crew?'
};
export const ARCHETYPES = [
  {role:'The Oathbound Shield', flavor:'A sworn guardian who measures victory by who walks out beside them.', setup:questions, sides:[
    {cond:'If you take a hit meant for another adventurer…',tone:'Crew'}, {cond:'If you leave someone behind because the contract cannot wait…',tone:'Job'}]},
  {role:'The Rift Scholar', flavor:'A wizard of unstable theory who can read the seams between one law of reality and the next.', setup:questions, sides:[
    {cond:'If you risk the party to learn an impossible truth…',tone:'Ruin'}, {cond:'If you destroy knowledge so no one else can use it…',tone:'Crew'}]},
  {role:'The Delver Rogue', flavor:'A trapbreaker, scout, and professional survivor who knows every lock has a price.', setup:questions, sides:[
    {cond:'If you warn the Crew about a trap instead of taking the treasure…',tone:'Crew'}, {cond:'If you trigger a trap behind you to slow the rival company…',tone:'Job'}]},
  {role:'The Ashen Acolyte', flavor:'A priest of a fading god whose miracles work best when something else pays the cost.', setup:questions, sides:[
    {cond:'If you spend a sacred resource to restore a fallen companion…',tone:'Crew'}, {cond:'If you call on a forbidden power to force the vault open…',tone:'Ruin'}]},
  {role:'The Beastwarden', flavor:'A ranger who trusts monsters more readily than patrons and can hear a dungeon’s hunger in its tracks.', setup:questions, sides:[
    {cond:'If you spare a creature that could still threaten the expedition…',tone:'Crew'}, {cond:'If you turn a bound beast against its former master…',tone:'Ruin'}]},
  {role:'The Clockwork Tinkerer', flavor:'An artificer carrying a hand-sized workshop, three bad ideas, and one device that should not function.', setup:questions, sides:[
    {cond:'If you repair a ward instead of harvesting its mechanism…',tone:'Crew'}, {cond:'If you reprogram a guardian to obey only you…',tone:'Job'}]}
  ,{role:'The Gravebound Knight', flavor:'A disgraced champion who believes the dead are the only comrades who never betray an order.', setup:questions, sides:[
    {cond:'If you stand between a trapped companion and the thing in the dark…',tone:'Crew'}, {cond:'If you raise the fallen to finish the march…',tone:'Ruin'}]}
  ,{role:'The Blood Ledger', flavor:'A pact-broker who records every favor in their own blood and collects with interest.', setup:questions, sides:[
    {cond:'If you forgive a debt that could buy the Crew’s escape…',tone:'Crew'}, {cond:'If you trade a companion’s secret for the vault’s key…',tone:'Job'}]}
  ,{role:'The Feral Hexblade', flavor:'A mercenary whose sentient sword has learned to whisper in the voices of everyone it has killed.', setup:questions, sides:[
    {cond:'If you lower the blade when an enemy begs for mercy…',tone:'Crew'}, {cond:'If you feed the sword a living name to break the ward…',tone:'Ruin'}]}
  ,{role:'The Plague Alchemist', flavor:'A masked apothecary who calls poison a cure whenever the patient is inconvenient.', setup:questions, sides:[
    {cond:'If you spend your last antidote on another adventurer…',tone:'Crew'}, {cond:'If you dose the rival expedition before they reach the relic…',tone:'Job'}]}
  ,{role:'The Masked Usurper', flavor:'A claimant to a dead throne who treats the Under-Vaults as a kingdom awaiting its proper ruler.', setup:questions, sides:[
    {cond:'If you surrender authority to save the expedition…',tone:'Crew'}, {cond:'If you crown yourself with the relic’s power…',tone:'Ruin'}]}
  ,{role:'The Void Shepherd', flavor:'A warlock who guides things from beyond the cracks and promises they will eat only the people who deserve it.', setup:questions, sides:[
    {cond:'If you bind the horror to yourself so it cannot reach the Crew…',tone:'Crew'}, {cond:'If you open the final gate and let the dark choose who survives…',tone:'Ruin'}]}
];
