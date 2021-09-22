import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'a0e6ee8c-b35d-4a07-bdb4-3ac93f19126f',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=a7ab29a3-02c7-4c45-81a8-e756e9897d79&groupId=80341867-c2f8-41d8-8c92-ed42fd7dccc2&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWV9fQ%3d%3d",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzE1NDYzOWMtNzRjMC00NDBlLWI5ZDYtYzU0ZjNiMGQzNzQzLyIsImlhdCI6MTYzMjMwNTM4OSwibmJmIjoxNjMyMzA1Mzg5LCJleHAiOjE2MzIzMDkyODksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFKRmhDUXZ5ZUpkMGI5VXJTdUdwSmxrZ05Wa2RIOW9PNWM2TkVhZjYyU2lpc25CbWREcURUeU9sdENTYWd1cVlDIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiSG9hbmciLCJnaXZlbl9uYW1lIjoiTG91aXMuIiwiaXBhZGRyIjoiNDkuMTc2LjE3Ni4zOSIsIm5hbWUiOiJMb3VpcyBIb2FuZyIsIm9pZCI6ImIzYTU0NjI5LTMzNWQtNDcxNC05YmY0LWJmZDljNjAxNGQxZiIsInB1aWQiOiIxMDAzMjAwMTIyQjMxNjgzIiwicmgiOiIwLkFXY0FuR05Vd2NCMERrUzUxc1ZQT3cwM1F3OEJISWRoWHJGUGc2eVlZUXAta1JCbkFNSS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJTenBwaFZBNm1fLUk2VW9mWUd2UVlKaW44cXRCVkJwNVJjSnU5Y1ZUNDh3IiwidGlkIjoiYzE1NDYzOWMtNzRjMC00NDBlLWI5ZDYtYzU0ZjNiMGQzNzQzIiwidW5pcXVlX25hbWUiOiJsb3Vpcy5ob2FuZ0BmaXNoZWFkLmNvbS5hdSIsInVwbiI6ImxvdWlzLmhvYW5nQGZpc2hlYWQuY29tLmF1IiwidXRpIjoiU2dVSlVuVjNRMHFUTXFreWc1SVdBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.j5RFIgdQj83OzRAZ1f1_blXkt2VLsUTWNqz8ZK4oD9MycZmRl84cYknonkWfgkyf3_tglCeNyyCBhd5itb8bbyKJunsAbw4CMCaLJ1FZ6t_4yDnIvVxcPbmz8C3LHkUolc8mySSm2I70mvny61mLOBCKd5GE1IBmbokgmtgB7haOOWHUF_dFa1Oe-8ISnI0T9aNj1mGnw3KLKf5WGGRofRg97jMjRhn6yK5ZM_lgKczZ1sNP9E_L7_ns3pTzSwaLD104bpSLk5CaNIPmZ_SutGLPs-eu9a5rzdWwYEebSBf_pBpxQc4BQM4U9-WvZgkrByQYifNKNXmGVRRx-MDb2w',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
