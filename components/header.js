const headings = [
  ["That", "rejoices", "me so much... that I forget the rest."],
  ["You're better, that's what I see, that's what", "rejoices", "me."],
  ["Frank told me you would", "rejoice", "us with your presence."],
  ["Even in the immense distractions of the journey I found a moment to", "rejoice", "at this furtive intimacy."],
  ["You will", "rejoice", "to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings."],
  ["Throughout his life there had truly been no one he was closer to, no one with whom he could so frankly", "rejoice", "in his successes and mull over his troubles."],
  ["Let's", "rejoice", "over these few moments we spend together, friends."],
  ["They could see that he desired them as he had never done before, and they", "rejoiced", "in their triumph."],
  ["I just", "rejoiced", "that it looked good"],
  ["You should", "rejoice", "in your accomplishments."],
  ["For that reason I", "rejoice", "over you, and have ventured to speak to you."],
];

export default () => {
  const [beginning, accent, ending] = headings[Math.floor(Math.random() * headings.length)];
  return (
    <header style={{ width: '600px', margin: '0 auto', padding: '100px 100px'}}>
      <h1>
        <span>{beginning}</span>&nbsp;
        <span style={{color: 'green'}}>{accent}</span>&nbsp;
        <span>{ending}</span>
      </h1>
    </header>
  );
};
