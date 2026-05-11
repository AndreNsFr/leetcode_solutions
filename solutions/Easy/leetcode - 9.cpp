class Solution {
public:
    bool isPalindrome(int x) {
        string x_string = to_string(x);
        vector<char> str(x_string.begin(),x_string.end());

        int j = str.size() - 1;
        for(int i = 0; i < str.size(); i++){
            if(str[i] != str[j] ){
                return false;
            }
            j--;
        }

        return true;
    }
};
