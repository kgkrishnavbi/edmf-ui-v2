import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import { FormGroup,InputGroup  } from '@blueprintjs/datetime';

export default function CreateCampaign() {
  const dispatch = useDispatch();

  return (
      <div class="w-full">
      <header className="bg-white shadow">
        <div className="h-16 mx-auto py-3 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Campaigns
          </h1>
        </div>
      </header>
       <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="h-100">
            <div class="flex flex-row-reverse mb-2">
              <button class="bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded">
                Save
              </button>
              <button class="bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded mr-3">
                Send Test
              </button>
            </div>
            <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                    Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Eg. New book Promotion"/>
                    
                </div>
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="description">
                    Description
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Campaign Description"/>
                </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">
                    Message
                    </label>
                    <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="password" placeholder="This is the DM that I want to send my followers"/>
                </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipients">
                    Recipients
                    </label>
                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option>Segment 1</option>
                        <option>Segment 2</option>
                        <option>Segment 3</option>
                    </select>
                </div>
            </div>
            </form>
          </div>
        </div>
        
       </main>
      </div>
  );
}
