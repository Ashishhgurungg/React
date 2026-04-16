import React from 'react'
import { Bookmark } from 'lucide-react';


const App = () => {
  return (
    <div className='parent'>
        <div className='card'>
           <div>
             <div className="top">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAACUCAMAAADmiEg1AAAAw1BMVEX///8AAAD+mQD39/f+//37+/tvb2/8////lwAZGRkeHh4LCwsSEhIbGxsWFhb09PQjIyPj4+P/kwDAwMBBQUE7Ozvc3NyysrIoKChNTU26urrs7Ox3d3dhYWEuLi42NjaVlZWKiorMzMykpKT+//f74LRYWFj5z533s1b2kAD68dv206KAgID348T52bP7+Or3tWb3wID6niHzy43uv3PupTf42pz5njH1ozjyqEz2yJH2vXHzxoH3rUbzpCj3rlvqlwCXXj0rAAAHCklEQVR4nO2aC1uiTBSAucr9IhaiZnlBE4wo2lrNddv//6u+MwOZXDQ/n4LpeebdWk0QXw9nzlyAYSgUCoVCoVAoFAqFQqFQKBQKhfKTGbiTfhfoTNpNq5yMO23Ne5fXtqIohnfTmw+n5LuL7thky9yMrKbNjmFN5hXSKWNXbFrvEJPWQWvAIzXmo+tj2sBw0LRiFYdTZMecvAZqXX6uzbI90sSt4SnaLHvHN22aQxydps2ynaZVc0y0U71vmlbN4Z2qzbKTpl336JbstIv5cDjvqWXvYdOye1yU5Ka4dxz070reHjnd5sTIq9nTXQfDT4veKjmJMs6b6dP9jcVKo3eb0ixSrN3j3NZ2sR8dNSJZgZtPb72QwMWA3zVjWabjHfXqF4rKVSOSFQzymVBsd+5N3rvViGQVVn981dvVi+Io270k1TuDb0+6o3FpjN2+INz7ANS7XgY/zVsULZTxLeWneFttdzIdtw5Mk8n0Ft3+6Ko0PiTdezD9KOQ/x9saX54wXyPNe3Di3Jgw72J3/jO8xeKo74d4d5XPhYnzFpl+teJlazzqTq9J9WbcsvLN7ioDuf08X+pn7LG720ruuKq01jDfXwVMvQ3PMwnzdotd5Nzd34y9bdswPI0s72K4b/IzTOStXSvXnmoT440X04pL36P8PqhD0j1bN8jxttAq/KSY3YWJMZ7Pe4bq2QY53mJ5MbZX2GmCvDXbVnUy8lvkReQtoiVXXcVOJnoYoy0in65awUMfYq2wmqHh3TQNe/N8UxdMRMviwZvnoZrYhqYarKaaGhj24TQgRPTVQG/Eapqha5AlhqKpKtsSsXZT4iAnYm+PNXXF1m3WNBXDVNgOvIaELfTd4OFKMwxDQ1/KMFXd1IcD/H14q5GFcCSHA2uxrKqrBkTUhFRQVLYDE2Jknnoz7gWcCQV567rKmjbbcxnesni+mfV7pJaGDbwhS3SQg+yGsHcZJL3z7rM2vArOppl6ex1IE9yiGzFHn43DCs1NUWzb03RTVcH7LvPGySIOerpuK3A2dt7sKM0TEVpIA+Yi8haxNwu5C4nAGrqh2JqJ84TBzZaHzlSzNR1SxTZ1w2AV8L5oo3YJEbcaudFAFEWsj4bXumLgOmeyOgsFBbZlP6hT0hQd7aKhHw3yiZ1mb26sFmL90hXu3seS7OSmuBGhu0eOVxfiuOTVehfvV2pDpjRqnNGpCOh0YFlW5/ASEAnXeFy7ysw8Or+3Cbi9wLo6ZniAUdPWTNXV+U/R+k1LA9ZndygZpTNCxjXjzvHVzGtmkG+hNimX6MfHtOdQFTv7dx70SCjfGPHIjYN3uJjvrdUOCbo3bHBQfJqOQfhdpgwbGZQI6J8oSMXXxalRZX2xSwkxW7W6S48Cv4KAn+Ijfr+4BJ8hSBUf1B4WO3VvuF828N0eu1tT0gNk7ru/vw/4JN8vRTtlMmrt1u71i9aokx9dD8aXvW76EnxvIYzul7e3t8v7KK4j4oIwe4gYqTpCltvpoLvV+52JW74X1nLb6REEyb9/XCdcEDgOJycP0YFAfCWS8BQkv2Lp4xT/T9DbZs+c48iy7Mgc4LzWEG6G8R8cJ3nxmXODJEnLIPn9e7VeLNarhONk8K6hZUpMvHbkYBGd/VGQ2mEY47f7sy2E/ZWpauhfC8qPcCtzQfIaCswZ2SJlv/i9EvMEqbL8csvqT5bCNbQnefXHZ86MlAQH8WP07FbmkqiOPEGqUrhA4vJq6UvnpLkAb4tWa/CNN468jmvRRv2O5G9QJZCdZBmfc4B4uQocFOdwLcubesLN4B7T/wMBR+bb+9A/7W2SlPYvcfQE1hz3Ch1YlHBO9L26OQcoBcvEwTEPVo+Rjwcax5FwO2TC5UOC6rbzCGcKSqL8txbjDFAQwi0Wh7gnb8uQ+SzTId5MPNusOHSauOAXrkYLJ6ipmrxboLqywamSRv35JT4ackEIXxboFKH95eQW1SImDORFXE+jzKnMspDjNhqs/szC2H/vSaWsUqOKF4ezzV8YjcjZrossp19R46xhdFLw9oXwKZHTiKfqyXrzCkO8EIjBNoRR3/3t48OWC5z3vTgneQxxA5X8hFvWMvouiguMHz0EWRRxzsgoqMlqu16/vb2tt2gA4uAx1Ls1F7xFvpSm1H3w5DPlSUgd4hKMMf4GH1b4G4C9nP73cTLeN/yboURK5zph5J89rvwKZtukoF5gd0a2MJBs0nQPZOFHm9/HzUE6SDazuIah34ngcZ3kR7dQ5ZxD7jCxWTxB94TmG8Jp/et3s4tfHC4XXL4N4lrtOAFIh/XX6ZORhDiCzgWppnBO8O958RLF50+PakBIu3opDqPZEjGbpVE+a7BbI6hSCGh1JfOUsifkZsg+hNQ5CoVCoVAoFAqFQqFQKBQKhUIhiv8AdZyD+NI7kXEAAAAASUVORK5CYII=" alt="" />
                <button>Save <Bookmark size= {12}/></button>
            </div>
            <div className="center">
                <h3>Amazon <span> 5 days ago</span></h3>
                <h2>Senior QA engineer</h2>
                <div className='tag'>
                    <h4>Part-time</h4>
                    <h4>Senior level</h4>
                </div>
            </div>
           </div>
            <div className="bottom">
                <div>
                    <h3>$120/hr</h3>
                    <p>Mumbia, India</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
        
    </div>
  )
}

export default App