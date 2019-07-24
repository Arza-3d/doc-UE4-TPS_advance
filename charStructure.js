
{
  let simple_chart_config = {
    chart: {
        container: "#tree-simple"
        ,connectors: {
            type: 'step'
        }
    },

    nodeStructure: {
      innerHTML: "<code title='ACharacter class from the UE4'><a href='https://api.unrealengine.com/INT/API/Runtime/Engine/GameFramework/ACharacter/index.html'>ACharacter</a></code>"
      ,children: [{
        innerHTML:  "<code title='C++ class base'><a href='#TPS_studyCharacter'>TPS_studyCharacter</a></code>"
        ,children: [
          {
            innerHTML: "<code title='blueprint class base'><a href='#CH_TPShooter'>CH_TPShooter</a></code>",
            children: [
                {
                    innerHTML:
                    "<a href='#CH_Belica'><img src='https://i.ibb.co/DLKb15z/TPS-belica.jpg'/>" +
                    "<code>CH_Belica</code></a>"
                }
                ,{
                    innerHTML:
                    "<a href='#CH_Drongo'><img src='https://i.ibb.co/Lt574qH/TPS-drongo.jpg'/>"+
                    "<code>CH_Drongo</code></a>"
                }
                ,{
                    innerHTML:
                    "<a href='#CH_Grimexe'><img src='https://i.ibb.co/p06fqY4/TPS-grimexe.jpg'/>"+
                    "<code>CH_Grimexe</code></a>"
                }
                ,{
                    innerHTML:
                    "<a href='#CH_Howitzer'><img src='https://i.ibb.co/SNvxH0y/TPS-howitzer.jpg'/>"+
                    "<code>CH_Howitzer</code></a>"
                }
                ,{
                    innerHTML:
                    "<a href='#CH_Revenant'><img src='https://i.ibb.co/8d7Kdps/TPS-revenant.jpg'/>"+
                    "<code>CH_Revenant</code></a>"
                }
                ,{
                    innerHTML:
                    "<a href='#CH_Sparrow'><img src='https://i.ibb.co/8PHRqZN/TPS-sparrow.jpg'/>"+
                    "<code>CH_Sparrow</code></a>"
                }
                ,{
                    innerHTML:
                    "<a href='#CH_Twinblast'><img src='https://i.ibb.co/8r6dfw4/TPS-twinblast.jpg'/>"+
                    "<code>CH_Twinblast</code></a>"
                }
                ,{
                    innerHTML:
                    "<a href='#CH_Wraith'><img src='https://i.ibb.co/SsC7JnT/TPS-wraith.jpg'/>"+
                    "<code>CH_Wraith</code></a>"
                }

            ]
          }
        ]
      }]


    }
  };

  let chart = new Treant(simple_chart_config);
}
