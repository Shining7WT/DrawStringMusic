import React, { useEffect, useState } from 'react';
import Album from "../../common/Album";

const Dashboard = () => {
  return (
      <div className="bg-body w-full h-screen px-20 text-white">

          <div className="flex flex-col h-full py-4">

              {/*/!*wallpaper compo*!/*/}
              {/*<div className="h-1/2">*/}

              {/*</div>*/}
              <div className="h-1/2">
                  <div className="w-1/2">
                      <Album/>
                  </div>

                  <div>

                  </div>

              </div>
          </div>

      </div>
  );
};

export default Dashboard;
