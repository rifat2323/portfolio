import {NextResponse,NextRequest} from 'next/server'


export async function GET(_request:Request
    
){
   return NextResponse.json({success:"pkk"},{status:200})

}