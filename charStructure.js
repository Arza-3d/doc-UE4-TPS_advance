
{
  let simple_chart_config = {
    chart: {
        container: "#tree-simple"
        ,connectors: {
            type: 'step'
        }
    },

    nodeStructure: {

      innerHTML:  "<div style='border: RGBA(0,0,0,0.05) thin solid; border-radius: 8px; padding: 4px'>" +
                  "<code title='base character class from the engine'><a href='#TPS_studyCharacter'>TPS_studyCharacter.h</a></code>&nbsp;+&nbsp;" +
                  "<code title='base character class from the engine'><a href='#TPS_studyCharacter'>TPS_studyCharacter.cpp</a></code>" +
                  "</div>",
      children: [
        {
          innerHTML: "<code title='TPS character class from the TPS template'><a href='#CH_TPShooter'>CH_TPShooter</a></code>",
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

    }
  };

  let chart = new Treant(simple_chart_config);
}
