
{
  let simple_chart_config = {
    chart: {
        container: "#tree-simple"
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
                  innerHTML: "<code title='.'><a href='#CH_Belica'>CH_Belica</a></code>"
              }
              ,{
                  innerHTML: "<code title='.'><a href='#CH_Drongo'>CH_Drongo</a></code>"
              }
              ,{
                  innerHTML: "<code title='.'><a href='#CH_GrimExe'>CH_GrimExe</a></code>"
              }
              ,{
                  innerHTML: "<code title='.'><a href='#CH_Howitzer'>CH_Howitzer</a></code>"
              }
              ,{
                  innerHTML: "<code title='.'><a href='#CH_Revenant'>CH_Revenant</a></code>"
              }
              ,{
                    innerHTML: "<code title='..'><a href='#CH_Sparrow'>CH_Sparrow</a></code>"
              }
              ,{
                  innerHTML: "<code title='.'><a href='#CH_TwinBlast'>CH_TwinBlast</a></code>"
              }
              ,{
                  innerHTML: "<code title='.'><a href='#CH_Wraith'>CH_Wraith</a></code>"
              }

          ]
        }
      ]

    }
  };

  let chart = new Treant(simple_chart_config);
}
