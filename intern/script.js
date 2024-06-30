const quotes = [
    { author: "Albert Einstein", quote: "Imagination is more important than knowledge." },
    { author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
    { author: "William Shakespeare", quote: "All the world's a stage, and all the men and women merely players." },
    { author: "William Faulkner",quote:"It may be bad, but it's the only way you can do anything really good."},
    {author: "William Shakespeare2",quote:"Boldness be my friend"},
    { author: "Mark Twain", quote: "The two most important days in your life are the day you are born and the day you find out why." },
    { author: "Maya Angelou", quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." },
    { author: "Oscar Wilde", quote: "To live is the rarest thing in the world. Most people exist, that is all." },
    { author: "Ralph Waldo Emerson", quote: "Do not go where the path may lead, go instead where there is no path and leave a trail." },
    { author: "Mother Teresa", quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier." },
    { author: "Steve Jobs", quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work." }
  ];
  
  function searchQuotes() {
    const authorInput = document.getElementById('authorInput').value.trim().toLowerCase();
  
    // Filter quotes by author
    const filteredQuotes = quotes.filter(quote => quote.author.toLowerCase().includes(authorInput));
  
    // Display a random quote from filtered results, if any
    const quoteContainer = document.getElementById('quoteText');
    if (filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const randomQuote = filteredQuotes[randomIndex];
        quoteContainer.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;
    } else {
        quoteContainer.textContent = "No quotes found for this  author's name.";
    }
  }
  