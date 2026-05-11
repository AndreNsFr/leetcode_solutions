#include <iostream>
#include <string>
#include <vector>

using namespace std;
class Solution {
public:

    int verify_value(char value){

        int result = 0;

        if(value == 'I'){
            result = 1;
        }else if(value == 'V'){
            result = 5;
        }else if(value == 'X'){
            result = 10;
        }else if(value == 'L'){
            result = 50;
        }else if(value == 'C'){
            result = 100;
        }else if(value == 'D'){
            result = 500;
        }else if(value == 'M'){
            result = 1000;
        }

        return result;
    }

    int romanToInt(string s) {
        
        vector<char> list(s.begin(), s.end());

        int count = 0;
        int actual_index = 0;

        for(char num : list){

            int next_value;
            int value = verify_value(num);

            if(actual_index < list.size() - 1){
                next_value = verify_value(list[actual_index + 1]);
            }else{
                next_value = verify_value(list[actual_index]);
            }

            if(value < next_value){
                value = value * -1;
            }

            count += value;

            actual_index++;
        }

        
        return count;

    }
};