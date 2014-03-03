module Jekyll
	module KeepUnique
		def keep_unique(input)
			input.to_s.split('|').uniq
		end
	end
end

Liquid::Template.register_filter(Jekyll::KeepUnique)
