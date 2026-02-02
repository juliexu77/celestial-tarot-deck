const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="text-center max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Tarot Deck Data Repository</h1>
        <p className="text-lg text-muted-foreground mb-6">
          A JSON data source for 78 tarot cards. No frontend needed—just data.
        </p>
        <div className="bg-muted rounded-lg p-4 text-left">
          <p className="font-mono text-sm text-muted-foreground">
            Fetch from: <code className="bg-background px-2 py-1 rounded">/data/tarot-deck.json</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
